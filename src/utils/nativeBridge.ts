//h5调用易购app用
class NativeBridge {
    public _isEnv: boolean | undefined
    public device: 3|4
    public static _instance: any
    constructor() {
        this._isEnv = this.isEnv()
        this.device = 3 //设备类型 3 安卓|UI内核的ios、4 WK内核的ios
        this.getDeviceType()
        console.log('NativeBridge初始化')
        
    }
    static getInstance():NativeBridge{
        if(!NativeBridge._instance){
            Object.defineProperty(NativeBridge,"_instance",{
                value:new NativeBridge()
            })
        }
        return NativeBridge._instance;
    }
    getDeviceType() {
        if (/(WKWebView)/i.test(navigator.userAgent)) {
            this.device = 4
            window.Callback = this.CallbackHandler
        }
    }
    /**
     * @param {string} nativeMethod 方法名
     * @param {boolean} isCallback 是否异步调用 仅支持wk内核ios
     * @param {any} param WK可以直接传，其他必须转成JSON格式 
     * @param {any[]} oldParam 兼容旧版本的参数 旧版本优先使用这个参数 其他同param 
     */
    handler(nativeMethod:string, isCallback?:boolean, param?:any, oldParam?:any[]) {//调用函数
        if (!this._isEnv) return 
        let device = this.device
        
        if (device === 3) {//安卓/UI内核ios
            if (oldParam) {
                if (!(oldParam instanceof Array)) {
                    throw new Error('oldParam 参数应该是一个数组！！！');
                }
                return window.locJs[nativeMethod](...oldParam);
            } else if (param) {
                if (typeof param !== 'string') param = JSON.stringify(param)
                return window.locJs[nativeMethod](param);
            } else {
                return window.locJs[nativeMethod]();
            }
        } else {//WK内核ios
            let identifier = new Date().getTime().toString().slice(-6) //传给wk的标识符，在wk回调时会返回这个标识符，用来防止多次调用冲突，一般不用
            if (isCallback) {//异步调用
                window.webkit.messageHandlers[nativeMethod].postMessage({
                    data: param,
                    identifier
                });
                return identifier
            } else {
                return window.prompt(nativeMethod, param);
            }
        }
    }
    CallbackHandler(identifier:string, methodName:string, param:any) {
        window[methodName]()
    }
    isEnv() {//判断当前是不是app环境
        if (window.locJs || window.webkit) {
            return true
        }
    }
}
export default NativeBridge;