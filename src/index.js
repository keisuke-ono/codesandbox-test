import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了タグの作成)
  const completeButton = document.createElement("button");
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromImcompleteList(deleteTarget);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグの生成
    const returnButton = document.createElement("button");
    returnButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = returnButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = returnButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    returnButton.innerText = "戻す";

    //divタグの配下を生成
    addTarget.appendChild(li);
    addTarget.appendChild(returnButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);

    const completeAre = document.getElementById;
  });
  completeButton.innerText = "完了";

  // button(削除タグの作成)
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromImcompleteList(deleteTarget);
  });
  deleteButton.innerText = "削除";

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // divタグの子要素の作成

  console.log(div);

  //未完了のリストに追加
  document.getElementById("imcomplete-list").appendChild(div);
};
