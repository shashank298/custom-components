import { Card } from "./components/Card";
const FETCH_CHATS =
  "https://my-json-server.typicode.com/codebuds-fk/chat/chats";

const search = document.getElementById("search");
const chatDetails = document.querySelector(".chat-details");
const chatList = document.querySelector(".chats");
const state = [];

function debounce(cb, delay = 250) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

const searchChats = debounce((input) => {
  const filteredData = state.filter((data) => {
    const regex = new RegExp(input, "gi");
    if (data.title.match(regex) || data.orderId.match(regex)) {
      return true;
    } else {
      return false;
    }
  });
  createChats(filteredData);
}, 800);

const createChats = (data) => {
  const chatListEl = document.querySelector(".chats");
  const chatList = data.map((chat) => {
    const { title, orderId, latestMessageTimestamp } = chat;
    return Card({
      title,
      imageUrl: chat.imageURL,
      orderId,
      latestMessageTimestamp
    });
  });
  chatListEl.innerHTML = chatList.join("");
};

const fetchData = async () => {
  try {
    const res = await fetch(FETCH_CHATS);
    const data = await res.json();
    state.push(...data);
    createChats(data);
  } catch (e) {
    console.error(e);
  }
};

fetchData();

search.addEventListener("input", (e) => {
  searchChats(e.target.value);
});

chatList.addEventListener(
  "click",
  (e) => {
    console.log(e.target);
  },
  { capture: true }
);
