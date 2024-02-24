import { MdCastForEducation, MdOutlineSportsHandball } from "react-icons/md";
import { BsCodeSlash, BsNewspaper } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";

export const posts = [
  {
    _id: "655b3f037a397a2c8546c2f5",
    title: "Prograaming language",
    slug: "markdown-to-jsx-v6-is-now-available",
    desc:
      '<p>IThis is an index to notable programming languages, in current or historical use. Dialects of BASIC, esoteric programming languages, and markup languages are not included. A programming language does not need to be imperative or Turing-complete, but must be executable and so does not include markup languages such as HTML or XML, but does include domain-specific languages such as SQL and its dialects.\'markdown-to-jsx\';\n' +
      "import React from 'react';\n" +
      "import {render} from 'react-dom';\n" +
      "\n" +
      "// surprise, it's a div instead!\n" +
      "const MyH1 = ({children, ...props}) =&gt; (&lt;div {...props}&gt;{children}&lt;/div&gt;);\n" +
      "\n" +
      "render((\n" +
      "    &lt;Markdown\n" +
      "        options={{\n" +
      "            overrides: {\n" +
      "                h1: {\n" +
      "                    component: MyH1,\n" +
      "                    props: {\n" +
      "                        className: 'foo',\n" +
      "                    },\n" +
      "                },\n" +
      "            },\n" +
      "        }}&gt;\n" +
      "        # Hello world!\n" +
      "    &lt;/Markdown&gt;\n" +
      "), document.body);\n" +
      "\n" +
      "/*\n" +
      "    renders:\n" +
      "\n" +
      '    &lt;div class="foo"&gt;\n' +
      "        Hello World\n" +
      "    &lt;/div&gt;\n" +
      ' */</code></pre><p style="text-align: start">HTML attributes can also be overridden, with a <a target="_blank" rel="noopener ugc nofollow" class="af lw" href="https://github.com/probablyup/markdown-to-jsx#usage"><u>few exceptions</u></a>.</p><h2 style="text-align: start"><strong>HTML is a-ok.</strong></h2><p style="text-align: start">Most markdown parsers steer clear of handling HTML and ones targeting JSX often have to resort to using <code>dangerouslySetInnerHTML</code>, an escape hatch that opens up your code to various security risks.</p><p style="text-align: start"><code>markdown-to-jsx</code> itself had to utilize this functionality in an earlier version, but as of v6 that is no longer the case! It’s all good now.</p><h2 style="text-align: start"><strong>Github-Flavored Markdown (GFM) syntaxes are supported.</strong></h2><p style="text-align: start">GFM <a target="_blank" rel="noopener ugc nofollow" class="af lw" href="https://github.github.com/gfm/"><u>adds a ton of useful functionality</u></a> to markdown like HTML tables, task lists, strikethrough formatting, and more.</p><p style="text-align: start">—</p><p style="text-align: start">All this weighs in at <a target="_blank" rel="noopener ugc nofollow" class="af lw" href="https://bundlephobia.com/result?p=markdown-to-jsx%406.0.3"><u>just over 5kB gzipped</u></a>.</p><p style="text-align: start">Special thanks are owed to the <a target="_blank" rel="noopener ugc nofollow" class="af lw" href="https://github.com/Khan/simple-markdown"><u>simple-markdown</u></a> team for creating an extremely simple, but highly-extensible markdown framework. A forked version of their parsing engine is the baseline for all the functionality above and much more to come. 🙏🏼</p><p style="text-align: start"><em>Check out my other project: </em><a target="_blank" rel="noopener ugc nofollow" class="af lw" href="https://buttermilk.js.org/"><u>buttermilk</u></a>, beautifully simple routing for React</p>',
    img: "https://www.unite.ai/wp-content/uploads/2023/11/DALL%C2%B7E-2023-11-12-13.06.04-Create-an-anime-style-illustration-of-a-half-human-half-robot-character-engaged-in-coding.-The-human-side-should-be-an-anime-character-of-East-Asian-.png",
    cat: "CODING",
    views:
      Array(50)[
        ("655ca253c2b11c0988aa3127",
        "655ca254c2b11c0988aa312c",
        "655ca25dc2b11c0988aa3131",
        "655ca25ec2b11c0988aa3136",
        "655ca2a17597bfc21e43f0ca",
        "655ca2a27597bfc21e43f0cf",
        "655ca2b87bd6931ee144606e",
        "655ca2cc7bd6931ee1446073",
        "655ca2cd7bd6931ee1446078",
        "655ca2d77bd6931ee144607d",
        "655ca2d87bd6931ee1446082",
        "655ca2ee7bd6931ee1446087",
        "655ca33ac70cdaf8d0abb200",
        "655ca33bc70cdaf8d0abb207",
        "655cabc55ff0ced1b1c50336",
        "655cabc65ff0ced1b1c5033d",
        "655cd5f6aad9ddee3dece7eb",
        "655cd5f7aad9ddee3dece7f2",
        "655cd685aad9ddee3dece7fd",
        "655cde4aa00890a1b49fcef7",
        "655cde4ba00890a1b49fcefe",
        "655ce4eade4a69fbc727ab7f",
        "655ce4ebde4a69fbc727ab86",
        "655ce520de4a69fbc727ab9c",
        "655ce521de4a69fbc727aba3",
        "655ce584de4a69fbc727abe4",
        "655ce585de4a69fbc727abeb",
        "655d82ec079fbf7891ad8af2",
        "655d82ed079fbf7891ad8afb",
        "655d832d079fbf7891ad8b29",
        "655d832e079fbf7891ad8b30",
        "655d8721079fbf7891ad8b4f",
        "655d8723079fbf7891ad8b56",
        "655d96a0079fbf7891ad8bd9",
        "655d96a1079fbf7891ad8be0",
        "655d9e49079fbf7891ad8c2b",
        "655d9e4a079fbf7891ad8c31",
        "655d9fff079fbf7891ad8c4e",
        "655da001079fbf7891ad8c55",
        "655da71e079fbf7891ad8cdf",
        "655da71f079fbf7891ad8ce6",
        "655da746079fbf7891ad8cf1",
        "655e2587d1d74ffbd27bc169",
        "655e2588d1d74ffbd27bc170",
        "655e2678d1d74ffbd27bc18f",
        "655e2679d1d74ffbd27bc196",
        "655ef1fac86d7a706c36f9b0",
        "655ef1fbc86d7a706c36f9bb",
        "655ef2bcc86d7a706c36f9c4",
        "655ef5b0c86d7a706c36f9cb")
      ],
    user: {
      _id: "655ad72bd148ee58ab8d5871",
      name: "Kartik ",      
      image:
        "https://firebasestorage.googleapis.com/v0/b/future-s-1f068.appspot.com/o/1708174904563img.jpg.png?alt=media&token=c8f04c8a-9251-4ee1-8a62-830c8e13c87c",
    },
    comments: ["655ca6965d5a025fa52b60c6", "655ce52bde4a69fbc727abac"],
    status: true,
    createdAt: "2024-02-24T11:12:03.368Z",
    updatedAt: "2024-02-24T06:48:16.785Z",
    __v: 0,
  },
  {
    _id: "655b21192255c0b35d4ab60b",
    title: "what is Fashion ?",
    slug: "Future scribe",
    desc: '<p>Fashion is an ever-evolving expression of style, culture, and identity, deeply ingrained in human history and society. It encompasses not only clothing but also footwear, accessories, makeup, hairstyles, and even lifestyle choices. Fashion trends reflect the zeitgeist of a particular era, influenced by a myriad of factors such as social, political, economic, and technological developments.Throughout history, fashion has served as a means of self-expression, allowing individuals to communicate their personalities, aspirations, and affiliations. From the opulent attire of royalty to the countercultural fashion statements of youth subcultures, clothing has been used to signal status, rebellion, conformity, or belonging.In contemporary society, the fashion industry is a global powerhouse, encompassing design, manufacturing, retail, and media. Fashion weeks in cities like Paris, Milan, London, and New York set the stage for the unveiling of new collections by renowned designers, shaping the direction of trends for the seasons to come.The democratization of fashion through mass production, fast fashion, and online retail has made style accessible to a broader audience, blurring the lines between high fashion and streetwear. Social media platforms like Instagram and TikTok have democratized the fashion influencer, allowing individuals to curate their personal brands and inspire millions with their unique style.However, the fashion industry also faces challenges, including issues of sustainability, ethical sourcing, and body inclusivity. Movements advocating for fair labor practices, eco-friendly materials, and size diversity are reshaping the landscape of fashion, urging brands to prioritize social and environmental responsibility. In conclusion, fashion is more than just clothing; it is a dynamic cultural phenomenon that reflects the values, attitudes, and aspirations of society. From haute couture runways to everyday street style, fashion continues to evolve, shape, and redefine our collective identity.</p>',
    img: "https://firebasestorage.googleapis.com/v0/b/future-s-1f068.appspot.com/o/Fashion.jpg?alt=media&token=53f568af-cd35-4ef8-932a-0dc956ac2ed9",
    cat: "FASHION",
    views:
      Array(23)[
        ("655caeaf5ff0ced1b1c503fa",
        "655caeaf5ff0ced1b1c50401",
        "655caec15ff0ced1b1c50414",
        "655caec25ff0ced1b1c5041b",
        "655cd693aad9ddee3dece81c",
        "655cd695aad9ddee3dece825",
        "655ce546de4a69fbc727abc2",
        "655ce548de4a69fbc727abc9",
        "655da977079fbf7891ad8d09",
        "655db9ba079fbf7891ad8da5",
        "655db9bc079fbf7891ad8dae",
        "655dbe1a079fbf7891ad8e2c",
        "655dbe1b079fbf7891ad8e33",
        "655dbe5b079fbf7891ad8e3c",
        "655dbe8a079fbf7891ad8e43",
        "655dc180079fbf7891ad8e6c",
        "655dc181079fbf7891ad8e73",
        "655e270bd1d74ffbd27bc1ab",
        "655e270dd1d74ffbd27bc1b2",
        "655e2736d1d74ffbd27bc1bb",
        "655e2737d1d74ffbd27bc1c4",
        "655e5599d1d74ffbd27bc415",
        "655e559ad1d74ffbd27bc41c")
      ],
    user: {
      _id: "655ad72bd148ee58ab8d5871",
      name: "Ketan",
      image:
        "https://firebasestorage.googleapis.com/v0/b/future-s-1f068.appspot.com/o/ketan.jpeg?alt=media&token=0eb111c1-a680-4f1f-882d-1802d10f04fa",
    },
    comments: [],
    status: true,
    createdAt: "2024-02-24T09:04:26.018Z",
    updatedAt: "2024-02-24T19:25:15.100Z",
    __v: 0,
  },
  {
    _id: "655ad816d148ee58ab8d58a1",
    title: "Prograaming languages",
    slug: "Future scribe",
    desc: '<p>pragramming languages makes that changes This is an index to notable programming languages, in current or historical use. Dialects of BASIC, esoteric programming languages, and markup languages are not included. A programming language does not need to be imperative or Turing-complete, but must be executable and so does not include markup languages such as HTML or XML, but does include domain-specific languages such as SQL and its dialects. </',
    img: "https://firebasestorage.googleapis.com/v0/b/future-s-1f068.appspot.com/o/Coding2.png?alt=media&token=01c6201a-e01c-497f-aed1-565b41bd88c9",
    cat: "CODING",
    views:
      Array(29)[
        ("655b1c2f9afbc1b789aa02d7",
        "655b1c309afbc1b789aa02db",
        "655b1c98e1295762eaefef36",
        "655b1c99e1295762eaefef3a",
        "655b1cbde1295762eaefef3e",
        "655b1ceae1295762eaefef42",
        "655b1cf7e1295762eaefef46",
        "655b1d07e1295762eaefef4a",
        "655b1d21e1295762eaefef4e",
        "655b1d34e1295762eaefef52",
        "655b1d53e1295762eaefef56",
        "655b1d74e1295762eaefef5a",
        "655b1d9de1295762eaefef5e",
        "655b1da9e1295762eaefef62",
        "655b1dafe1295762eaefef66",
        "655b1dbfe1295762eaefef6a",
        "655b1e0e118e3dbdced968e5",
        "655cabce5ff0ced1b1c50351",
        "655cabd05ff0ced1b1c50358",
        "655cac8b5ff0ced1b1c5036c",
        "655cac8c5ff0ced1b1c50373",
        "655ce88710a6a591a41a30b7",
        "655ce88810a6a591a41a30be",
        "655d8300079fbf7891ad8b06",
        "655d830a079fbf7891ad8b0d",
        "655d830b079fbf7891ad8b14",
        "655d9cc2079fbf7891ad8c0a",
        "655d9cc3079fbf7891ad8c11",
        "655da9eb079fbf7891ad8d14")
      ],
    user: {
      _id: "655ad72bd148ee58ab8d5871",
      name: "Roshan",
      image:
        "https://firebasestorage.googleapis.com/v0/b/future-s-1f068.appspot.com/o/roshan.jpeg?alt=media&token=f6b516bd-b80d-4ea9-b6c5-a1b655f050ac",
    },
    comments: [
      "655c13510f6afc38e16cb28a",
      "655c344846a378c9c55ff301",
      "655c34ad46a378c9c55ff313",
    ],
    status: true,
    createdAt: "2024-02-24T03:52:54.673Z",
    updatedAt: "2024-02-24T07:12:43.796Z",
    __v: 0,
  },
];

export const CATEGORIES = [
  {
    label: "NEWS",
    color: "bg-[#e11d48]",
    text: "text-[#fff]",
    icon: <BsNewspaper />,
  },
  {
    label: "SPORTS",
    color: "bg-[#2563eb]",
    icon: <MdOutlineSportsHandball />,
  },
  {
    label: "CODING",
    color: "bg-[#000000]",
    icon: <BsCodeSlash />,
  },
  {
    label: "EDUCATION",
    color: "bg-[#ca8a04]",
    icon: <MdCastForEducation />,
  },
  {
    label: "FASHION",
    color: "bg-[#9333ea]",
    icon: <GiClothes />,
  },
];

export const popular = {
  posts: [
    {
      _id: "655b3f037a397a2c8546c2f5",
      title: "Artificial intelligence ",
      slug: "Future scribe",
      img: "https://www.unite.ai/wp-content/uploads/2023/11/DALL%C2%B7E-2023-11-12-13.06.04-Create-an-anime-style-illustration-of-a-half-human-half-robot-character-engaged-in-coding.-The-human-side-should-be-an-anime-character-of-East-Asian-.png",
      cat: "NEWS",
      createdAt: "2024-02-01T11:12:03.368Z",
      views: 50,
    },
    {
      _id: "655ad816d148ee58ab8d58a1",
      title: "Programming languages ",
      slug: "Future scribe",
      img: "https://firebasestorage.googleapis.com/v0/b/future-s-1f068.appspot.com/o/Coding2.png?alt=media&token=01c6201a-e01c-497f-aed1-565b41bd88c9",
      cat: "CODING",
      createdAt: "2024-02-24T03:52:54.673Z",
      views: 29,
    },
    {
      _id: "655b21192255c0b35d4ab60b",
      title: "Future Fashion",
      slug: "Future scribe",
      img: "https://firebasestorage.googleapis.com/v0/b/future-s-1f068.appspot.com/o/Fashion.jpg?alt=media&token=53f568af-cd35-4ef8-932a-0dc956ac2ed9",
      cat: "FASHION",
      createdAt: "2024-02-24T09:04:26.018Z",
      views: 23,
    },
  ],
  writers: [
    {
      _id: "655ad72bd148ee58ab8d5871",
      name: "Ketan",
      image:
        "https://firebasestorage.googleapis.com/v0/b/future-s-1f068.appspot.com/o/ketan.jpeg?alt=media&token=0eb111c1-a680-4f1f-882d-1802d10f04fa",
      followers: 2,
    },
    {
      _id: "655dbc30079fbf7891ad8df3",
      name: "Roshan",
      image:
        "https://firebasestorage.googleapis.com/v0/b/future-s-1f068.appspot.com/o/roshan.jpeg?alt=media&token=f6b516bd-b80d-4ea9-b6c5-a1b655f050ac",
      followers: 0,
    },
  ],
};

export const writer = {
  _id: "655ad72bd148ee58ab8d5871",
  name: "Ketan",
  email: "Ketan@gmail.com",
  emailVerified: true,
  accountType: "Writer",
  image:
    "https://firebasestorage.googleapis.com/v0/b/future-s-1f068.appspot.com/o/ketan.jpeg?alt=media&token=0eb111c1-a680-4f1f-882d-1802d10f04fa",
  provider: "khan",
  createdAt: "2024-02-24T03:48:59.313Z",
  updatedAt: "2024-02-24T08:31:31.779Z",
  __v: 0,
  followers: [
    {
      _id: "655cde16a00890a1b49fcec2",
      followerId: "655acf151a4659413d8ab136",
    },
    {
      _id: "655dbc63079fbf7891ad8e0f",
      followerId: "655dbc30079fbf7891ad8df3",
    },
  ],
};

export const COMMENTS = [
  {
    _id: "655ce52bde4a69fbc727abac",
    user: { _id: "655acf151a4659413d8ab136", name: "Roshan" },
    post: "655b3f037a397a2c8546c2f5",
    desc: "Hello",
    createdAt: "2024-02-24T17:13:15.842Z",
    updatedAt: "2024-02-24T17:13:15.842Z",
    __v: 0,
  },
  {
    _id: "655ca6965d5a025fa52b60c6",
    user: { _id: "655acf151a4659413d8ab136", name: "roshan" },
    post: "655b3f037a397a2c8546c2f5",
    desc: "Check out",
    createdAt: "2024-02-24T12:46:15.004Z",
    updatedAt: "2024-02-24T12:46:15.004Z",
    __v: 0,
  },
];
