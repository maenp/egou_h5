import React from 'react'
export default (WrapperComponents) => {
    return class extends WrapperComponents {
        render() {
            this.state.flag=0
            let {success}=this.state

                if(success){
                    return super.render()
                }
                return <h3>Loading...</h3>
                // <WrapperComponents {...this.props}/>

        }

    }
}