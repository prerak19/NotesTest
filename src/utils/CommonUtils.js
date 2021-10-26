import * as _ from './HttpInterceptor.js';

const CommonUtils = {
    getPosts: function () { //can not find 
        let url = '/posts';
        return _.get(url).then(res => {
            return res;
        });
    },
}


export default CommonUtils