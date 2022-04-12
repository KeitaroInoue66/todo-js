import "./styles.css";

const onClickAdd = () => {
  // まずは追加ボタンが押されたのを確認したいので
  // alert();
  // 変数に入力した文字を入れる
  const inputText = document.getElementById("inputText").value;
  // 入力した文字が残り続けてしまうので空にする
  document.getElementById("inputText").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div作成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを生成
  const li = document.createElement("li");
  li.innerText = text;

  // ボタン(完了)の作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
    // 完了リストに追加する要素
    // まずは親要素の取得
    const addTarget = completeButton.parentNode;
    // TODOの内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;
    // console.log(text);

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    // console.log(li);

    // 戻すボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //　押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      // console.log(deleteTarget);
      document.getElementById("complete_list").removeChild(deleteTarget);

      //テキストの取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // console.log(addTarget);

    //　完了リストに追加
    document.getElementById("complete_list").appendChild(addTarget);

    // 押された完了ボタンの親タグのd(div)を削除
    // const deleteTarget = completeButton.parentNode;
    // document.getElementById("incomplete_list").removeChild(deleteTarget);
  });

  // // ボタン(削除)の作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
    // 押された削除ボタンの親タグのd(div)を削除
    // const deleteTarget = deleteButton.parentNode;
    // // console.log(deleteTarget);
    // document.getElementById("incomplete_list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete_list").appendChild(div);
};

document
  // idの取得をするため
  .getElementById("add-button")
  // クリックイベントを付与したいので
  .addEventListener("click", () => onClickAdd());
