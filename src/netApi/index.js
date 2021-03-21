
const netApi = {
    saveFormData:param => {
        return new Promise(rslv=>{
            setTimeout(()=>{
                console.info("发送保存请求中...参数："+param);
                rslv("请求成功");
            },500);
           
        })
    },
    deleteFormData:param => {
        return new Promise(rslv=>{
            setTimeout(()=>{
                console.info("发送删除请求中...参数："+param);
                rslv("请求成功");
            },500);
        })
    }
}
export default netApi;