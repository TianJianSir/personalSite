class CheckHelper {
    constructor() {
        this.SpecialEmaileRegex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        this.EmailRegex = /^(\w)[\w\-]+(\.\w+)*@([A-Za-zd0-9]+[-.])+[A-Za-zd]{2,4}$/
        this.PhoneRegex = /(^1(3[5-9]|47|5[012789]|78|73|8[23478])\d{8}$|134[0-8]\d{7}$)|(^1(8[019]|77)\d{8}$|1349\d{7}$)|(^1(3[0-2]|45|5[56]|76|8[56])\d{8}$)|(^1[35]3\d{8}$)|(^17[059]\d{8}$)/
        this.TelephoneRegex = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/
        this.URLRegex = /^(http|https):\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]':+!]*([^<>""])*$/
        this.HasNumberRegex = /^.*\d+.*$/
        this.IDCardRegex = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/
        this.PassWordRegex = /^(?![^a-zA-Z]+$)(?!\D+$).{6,12}$/
        this.numberType = /^[0-9]+([.]{1}[0-9]+){0,1}$/
    }

    // 是否为空
    isNull(value) {
        if (value === '') {
            return true
        }

        if (value.length === 0) {
            return true
        }


        return false
    }

    // 对象是否为空
    isEmpty(obj) {
        for (const i in obj) {
            if (obj.hasOwnProperty(i)) {
                return false
            }
        }

        return true
    }

    // 比较两个数字是否相等，因为0.1+0.2 !== 0.3,所以简单的===比较，在极少的情况下是不正确的
    numbersCloasEnoughToEqual(n1,n2){
        if(!Number.EPSILON){
            Number.EPSILON = Math.pow(2,-52)
        }
        return Math.abs(n1-n2)<Number.EPSILON
    }

    // 最小长度验证
    min_length_validation(params, num) {
        if (params.length < num) {
            return { result: false, message: `长度小于${num}位` }
        }
        return { result: true }
    }

    // 最大长度验证
    max_length_validation(params, num) {
        if (params.length > num) {
            return { result: false, message: `长度大于${num}位` }
        }
        return { result: true }
    }

    // 正则表达式验证
    regex_validation(params, reg) {
        if (!reg.test(params)) {
            return { result: false, message: '格式不正确' }
        }

        return { result: true }
    }

    // 身份证号验证
    is_IDCard(value) {
        return this.IDCardRegex.test(value)
    }

    // 手机验证
    is_phone_validation(params) {
        if (!this.isPhone(params)) {
            return { result: false, message: '格式不正确' }
        }
        return { result: true }
    }

    // 邮箱验证
    is_email_validation(params) {
        if (!this.isEmail(params)) {
            return { result: false, message: '格式不正确' }
        }
        return { result: true }
    }

    // 是否包含数字
    isHasNumber(value) {
        return this.HasNumberRegex.test(value)
    }

    // 是否为整数或小数
    isNumberType(value) {
        return this.numberType.test(value)
    }

    // 输入的是否是中文
    inputIsChina(value) {
        if(!value) return false
        if(/.*[\u4e00-\u9fa5]+.*$/.test(value)){
            return false
        }
        return true
    }

    // 密码验证规则（包含数字，字母。字符任意两种组合）
    PasswordRule(value) {
        return this.PassWordRegex.test(value)
    }

    // 是否是邮箱
    isEmail(value,type) {
        if(type){
            return this.SpecialEmaileRegex.test(value)
        }else{
            return this.EmailRegex.test(value)
        }
    }

    // 是否是电话号码
    isTelephoneRegex(value) {
        return this.TelephoneRegex.test(value)
    }

    // 是否是手机号码
    isPhone(value) {
        return this.PhoneRegex.test(value)
    }

    // 是否是一个链接
    isURLRegex(value) {
        return this.URLRegex.test(value)
    }

    // 清除空格
    removeBlank(value) {
        return value.replace(/\s+/g, "")
    }

}

let checkHelper = new CheckHelper()
export { checkHelper }
