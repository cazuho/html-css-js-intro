// 指定のセレクター（今回h1）に一致する要素を取得する
// const myHeading = document.querySelector("h1");
// 取得した要素のテキストを変更する
// myHeading.textContent = "Hello world!";

// 指定のセレクター（img）に一致する要素を取得する
const myImage = document.querySelector("img");

// imgaをクリックした時のイベントハンドラーを設定する
myImage.onclick = () => {
    // imgのsrc属性を取得する
    const mySrc = myImage.getAttribute("src");

    // 取得したsrc属性の値によって画像を切り替える
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// ユーザー名を設定する関数
function setUserName() {
    // ダイアログを表示し、入力を受け取る
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
        setUserName();
    } else {
        // ブラウザにnameというキーでmyNameの値を保存する
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName} さん、こんにちは！`;
    }
}

// ブラウザに保存されてない場合はユーザー名を設定する
if (!localStorage.getItem("name")) {
    setUserName();
// ブラウザに保存されている場合は保存されている名前を表示する
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName} さん、こんにちは！`;
}

// ボタンをクリックした時にユーザー名を設定する
myButton.onclick = () => {
    setUserName();
};
