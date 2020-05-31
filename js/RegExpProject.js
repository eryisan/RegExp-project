function byId(id){
    return typeof(id) === "string" ? document.getElementById(id) : id;
}

var username    = byId("username"),
    pwd         = byId("pwd"),
    agPwd       = byId("agPwd"),
    fullname    = byId("fullname"),
    sex         = byId("sex"),
    idNumber    = byId("idNumber"),
    pemail      = byId("pemail"),
    phoneNumber = byId("phoneNumber"),
    subbtn      = byId("subbtn"),
    iok         = document.getElementsByClassName("iok"),
    // 各个表单部分输入是否正确的标记
    isTrue0 = false,
    isTrue1 = false,
    isTrue2 = false,
    isTrue3 = false,
    isTrue4 = false,
    isTrue5 = false,
    isTrue6 = false;

// 用户名正则验证,6-20位字母、数字或"_",字母开头
username.onblur = function(){

    // 用户名的正则
    var pattern = /^[a-zA-Z]\w{5,19}$/;
    if(this.value == ""){
        iok[0].innerHTML = "6-20位字母、数字或\"_\",字母开头";
        // 如果用户名为空,将isTrue0置为false,说明用户名输入的格式不正确
        isTrue0 = false;
    }else{
        if(this.value.match(pattern)){
            iok[0].innerHTML = "OK";
            // 如果正则匹配正确,将isTrue0置为true,说明用户名输入的格式正确
            isTrue0 = true;
        }else{
            iok[0].innerHTML = "6-20位字母、数字或\"_\",字母开头";
            // 将isTrue0置为false,说明用户名输入的格式不正确
            isTrue0 = false;
        }
    }

}

// 下面的密码和别的部分,跟用户名是类似的
// 密码正则验证,数字、字母或符号,中间不能有空格 --- 6-18位,包含数字、字母、符号
pwd.onblur = function(){

    // 用户名的正则
    var pattern = /^(?:\d|[a-zA-Z]|[^\s]){6,18}$/;
    if(this.value == ""){
        iok[1].innerHTML = "6-18位数字、字母或符号,中间不能有空格";
        isTrue1 = false;
    }else{
        if(this.value.match(pattern)){
            iok[1].innerHTML = "OK";
            isTrue1 = true;
        }else{
            iok[1].innerHTML = "6-18位数字、字母或符号,中间不能有空格";
            isTrue1 = false;
        }
    }

}

// 请设置密码---确认密码
agPwd.onblur = function(){
    if(isTrue1){
        if(this.value == pwd.value){
            iok[2].innerHTML = "OK";
            isTrue2 = true;
        }else{
            iok[2].innerHTML = "两次输入密码不一致";
            isTrue2 = false;
        }
    }else{
        iok[2].innerHTML = "";
        isTrue2 = false;
    }
}

// 两位到四位的中文 --- 真实姓名为两位到四位的中文
fullname.onblur = function(){

    var pattern = /^[\u4e00-\u9fa5]{2,4}$/;
    if(this.value == ""){
        iok[3].innerHTML = "真实姓名为两位到四位的中文";
        isTrue3 = false;
    }else{
        if(this.value.match(pattern)){
            iok[3].innerHTML = "OK";
            isTrue3 = true;
        }else{
            iok[3].innerHTML = "真实姓名为两位到四位的中文";
            isTrue3 = false;
        }
    }

}

// 请输入18位的身份证号码
idNumber.onblur = function(){

    var pattern = /^[\d]{15}$|^[\d]{17}{\dxX]$/;
    if(this.value == ""){
        iok[4].innerHTML = "请输入15位或18位的身份证号码";
        isTrue4 = false;
    }else{
        if(this.value.match(pattern)){
            iok[4].innerHTML = "OK";
            isTrue4 = true;
        }else{
            iok[4].innerHTML = "请输入15位或18位的身份证号码";
            isTrue4 = false;
        }
    }

}

// 邮箱格式不正确
pemail.onblur = function(){

    var pattern = /^\w+@(?:[a-zA-Z\.]+)(?:\.[a-zA-Z]{2,})$/;
    if(this.value == ""){
        iok[5].innerHTML = "请输入邮箱";
        isTrue5 = false;
    }else{
        if(this.value.match(pattern)){
            iok[5].innerHTML = "OK";
            isTrue5 = true;
        }else{
            iok[5].innerHTML = "邮箱格式不正确";
            isTrue5 = false;
        }
    }

}

// 电话号码不正确
phoneNumber.onblur = function(){

    var pattern = /^(15[(0-35-9]|13\d|18[025-9])\d{8}$/;
    if(this.value == ""){
        iok[6].innerHTML = "请输入电话号码";
        isTrue6 = false;
    }else{
        if(this.value.match(pattern)){
            iok[6].innerHTML = "OK";
            isTrue6 = true;
        }else{
            iok[6].innerHTML = "电话号码不正确";
            isTrue6 = false;
        }
    }

}


// 提交按钮验证
subbtn.onclick = function(){
    // 在点击提交按钮时,对各个表单部分进行判断,如果所有的标记都正确,那么就弹出验证成功,否则什么都不做
    if(isTrue0 && isTrue1 && isTrue2 && isTrue3 && isTrue4 && isTrue5 && isTrue6){
        alert("验证成功");
    }
}


