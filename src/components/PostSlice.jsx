import { createSlice, nanoid } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        id: "1",
        name: "Марія",
        username: "marychka",
        title: "Доброго вечора, ми з України!",
        content:
          "Фраза стала популярною завдяки однойменному музичному треку електронного дуету PROBASS ∆ HARDI, реліз якого відбувся 2014 року. Слова, з яких зробили семпл, озвучив учасник українського гурту «ДахаБраха» Марко Галаневич.",
        date: new Date(2023, 3, 1, 16, 15, 32).toLocaleString(),
        avatar: "/images/1.jpg",
        mark: "",
      },
      {
        id: "2",
        name: "Павло",
        username: "p_a_V_e_l",
        title: "Покладіть насіння собі у кишені",
        content:
          "На початку вторгнення в мережі набрало популярності відео, на якому жінка з міста Генічеськ Херсонської області не боїться без зброї протистояти російському військовому. Більше того, дає йому досить слушну пораду. А саме — покласти сире насіння в кишені, щоби потім з нього проросли соняшники, коли російський окупант поляже в землю.",
        date: new Date(2023, 2, 22, 12, 43, 29).toLocaleString(),
        avatar: "/images/2.jpg",
        mark: "",
      },
      {
        id: "3",
        name: "Олена",
        username: "olen_ka",
        title: "Скажи «паляниця»",
        content: "Відео, на якому житель Сумщини йде до озброєних окупантів, швидко стало вірусним. Відтоді ця фраза в українських містах стала своєрідним паролем, що допомагає виявляти російські диверсійно-розвідувальні групи.",
        date: new Date(2023, 2, 12, 17, 55, 52).toLocaleString(),
        avatar: "/images/3.jpg",
        mark: "",
      },
      {
        id: "4",
        name: "Дмитро",
        username: "dmytryk.com",
        title: "Тракторні війська",
        content: `Українські трактори - одні з "героїв" нашої війни. Скільки російської ворожої техніки вони затрофеїли - й не злічити. "Тракторні війська" стали відомими на весь світ. Про випадки, коли українські фермери буксирували важку воєнну техніку ворога писали провідні світові ЗМІ.`,
        date: new Date(2023, 1, 28, 20, 15, 10).toLocaleString(),
        avatar: "/images/4.jpg",
        mark: "",
      },
      {
        id: "5",
        name: "Тетяна",
        username: "_tetianka_",
        title: "Немає сечі терпіти ці борошна",
        content:
          "Ця фраза — приклад невдалого машинного перекладу з російської на українську. Вона актуалізувалася, коли боти РФ намагалися запустити від імені українців флешмоб у соцмережах із вимогою вмикати людям світло.",
        date: new Date(2023, 1, 25, 11, 35, 22).toLocaleString(),
        avatar: "/images/5.jpg",
        mark: "",
      },
    ],
  },

  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.unshift(action.payload);
      },
      prepare(name, username, title, content) {
        return {
          payload: {
            id: nanoid(),
            name,
            username,
            date: new Date().toLocaleString(),
            title,
            content,
            avatar: "/images/0.jpg",
            mark: "",
          },
        };
      },
    },

    postUpdated: (state, action) => {
      const { id, title, content } = action.payload;
      const editablePost = state.posts.find((user) => user.id === id);
      if (editablePost) {
        editablePost.title = title;
        editablePost.content = content;
        editablePost.date = new Date().toLocaleString();
        editablePost.mark = "відредаговано";
      }
    },

    removePost(state, action) {
      state.posts = state.posts.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { postAdded, postUpdated, removePost } = postsSlice.actions;
export default postsSlice.reducer;