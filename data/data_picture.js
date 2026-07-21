"use strict";

const cafeData = {
  "image_id": "cafe_woman.webp",
  "overall_description_ja": "暖かな自然光が差し込む落ち着いたカフェで、若い女性が窓辺に座り、両手で白いコーヒーカップを持って静かに飲み物を楽しんでいる。木製のテーブルにはノート、ペン、白い花の入った花瓶、受け皿とスプーンが置かれ、背景にはメニューボード、エスプレッソマシン、棚、植物、照明が見える。",
  "overall_description_en": "A young woman is sitting by a large window in a cozy cafe, quietly enjoying a cup of coffee. A notebook, a pen, a vase of white flowers, a saucer, and a spoon are placed on the wooden table, while a menu board, an espresso machine, shelves, plants, and pendant lights can be seen in the background.",
  "overall_mood": ["cozy", "warm", "peaceful", "relaxed", "serene", "quiet", "calm", "comfortable", "inviting", "sunny", "softly lit", "natural", "gentle", "homey", "pleasant", "tranquil", "thoughtful", "restful"],

  "core_svo_targets": [
    {
      "step": 1,
      "slot": "subject",
      "name": "主語 (Subject)",
      "targets": [
        "woman",
        "lady",
        "girl",
        "customer",
        "person",
        "patron",
        "she",
        "figure"
      ],
      "hint_msg": "まずは描写の中心となる「女性 (woman)」などの主語（誰が/何が）を入れてみましょう。",
      "success_msg": "Good! 次は彼女が何をしているか、動作（Action）を続けましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "drinking",
        "holding",
        "sitting",
        "enjoying",
        "sipping",
        "relaxing",
        "looking",
        "taking",
        "spending"
      ],
      "hint_msg": "主語が書けました！次は「飲んでいる (drinking)」や「座っている (sitting)」など進行形で書いてみましょう。",
      "success_msg": "Great! SVOの核ができました。最後に目的語や場所（Object / Place）を付け足しましょう。"
    },
    {
      "step": 3,
      "slot": "object",
      "name": "目的語・場所",
      "targets": [
        "coffee",
        "cup",
        "cafe",
        "window",
        "table",
        "shop",
        "light",
        "sunlight"
      ],
      "hint_msg": "最後に「コーヒー (coffee)」や、彼女がいる「カフェ (cafe)」「窓辺 (window)」などの情報を加えましょう。",
      "success_msg": "Excellent! 基本の描写が完成しました。さらに装飾するか、Finish & Checkを押してモデル解答を見てみましょう！"
    }
  ],

　// ★追加：画像専用のミッションガイド
  "mission_guides": {
    "gist": "窓辺に座っている女性（woman）や、飲んでいるもの（coffee）を書いてみよう",
    "setting": "彼女がいる場所（cafe）や、手前のテーブル（table）、窓（window）に注目しよう",
    "details": "光の様子（sunlight）や、全体の雰囲気（peaceful, cozy）を付け足そう",
    "complete": "素晴らしい！さらに花瓶（vase）やメニュー（menu）など細部を描写しよう！"
  },

  "suggested_topics": [
    "a quiet moment at a cafe",
    "enjoying coffee alone",
    "taking a relaxing break",
    "a peaceful morning",
    "spending time by the window",
    "simple pleasures in daily life",
    "a cozy cafe atmosphere"
  ],

  "scene_structure": {
    "foreground": ["round wooden table", "cream-colored notebook", "black pen", "glass vase", "small white flowers", "green flower stems", "white saucer", "metal spoon", "woman's blue jeans", "edge of wooden chair"],
    "midground": ["young woman", "white coffee cup", "cream-colored knit sweater", "large cafe window", "window frame", "handwritten message on the window", "potted plant", "sunlight"],
    "background": ["cafe counter", "black chalkboard menu", "commercial espresso machine", "coffee grinder", "stacked paper cups", "glass jars", "pastries", "wooden shelves", "books", "green plants", "pendant lights", "hanging light bulbs"]
  },

  "elements": [
    {
      "id": "element_001",
      "label": "woman",
      "label_ja": "女性",
      "category": "person",
      "importance": "primary",
      "description": "A young woman with brown hair tied in a loose bun is sitting in a cafe. She is wearing a cream-colored knit sweater and blue jeans and is holding a white coffee cup with both hands.",
      "bounding_box_conceptual": [5, 30, 93, 52],
      "color": ["cream", "beige", "brown", "blue"],
      "attributes": ["young", "calm", "relaxed", "peaceful", "serene", "thoughtful", "comfortable"],
      "action": ["sitting", "holding a cup", "drinking coffee", "sipping coffee", "relaxing", "enjoying a quiet moment", "looking down"],
      "synonyms_and_related_words": ["woman", "young woman", "lady", "female customer", "customer", "cafe customer", "coffee drinker", "coffee lover", "person", "guest", "cafe-goer"],
      "accepted_words": [
        "woman",
        "young woman",
        "lady",
        "girl",
        "female customer",
        "customer",
        "cafe customer",
        "coffee drinker",
        "coffee lover",
        "person",
        "guest",
        "cafe-goer",
        "patron",
        "individual",
        "figure",
        "she"
      ],
      "common_typos": [
        "womn",
        "womman",
        "womam",
        "wommen",
        "ladie",
        "laydy",
        "costomer",
        "custmer",
        "persen",
        "womem"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "woman",
            "ja": "女性、女の人"
          },
          {
            "en": "girl",
            "ja": "女の子、若い女性"
          }
        ],
        "A2": [
          {
            "en": "lady",
            "ja": "女性、淑女（少し丁寧な表現）"
          },
          {
            "en": "person",
            "ja": "人、人物"
          }
        ],
        "B1": [
          {
            "en": "customer",
            "ja": "客、顧客"
          },
          {
            "en": "guest",
            "ja": "客、ゲスト"
          },
          {
            "en": "female customer",
            "ja": "女性客"
          }
        ],
        "B2": [
          {
            "en": "patron",
            "ja": "常連客、顧客（ややフォーマル）"
          },
          {
            "en": "individual",
            "ja": "個人、人（客観的な表現）"
          },
          {
            "en": "solitary figure",
            "ja": "一人静かにいる人物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a person lost in thought",
          "ja": "物思いにふける人（内面を描写したい時）"
        },
        {
          "en": "a solitary figure",
          "ja": "一人静かにたたずむ人（文学的・雰囲気重視）"
        },
        {
          "en": "a coffee lover enjoying a private moment",
          "ja": "一人の時間を楽しむコーヒー好きの人"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "woman, lady, person, customer" },
        { "level": "beginner", "type": "vocabulary", "text": "hair, sweater, jeans, hands" },
        { "level": "beginner", "type": "grammar", "text": "A woman is sitting in a cafe. 「女性がカフェに座っています」" },
        { "level": "beginner", "type": "sentence_starter", "text": "There is a woman..." },
        { "level": "beginner", "type": "sentence_starter", "text": "The woman is..." },
        { "level": "intermediate", "type": "vocabulary", "text": "young woman, cafe customer, relaxed expression, loose bun, knit sweater" },
        { "level": "intermediate", "type": "phrase", "text": "enjoying a quiet moment" },
        { "level": "intermediate", "type": "phrase", "text": "taking a relaxing break" },
        { "level": "intermediate", "type": "sentence_starter", "text": "A young woman is quietly enjoying a cup of coffee..." },
        { "level": "advanced", "type": "phrase", "text": "Her brown hair is tied up in a loose, casual bun." },
        { "level": "advanced", "type": "grammar", "text": "The woman, dressed in a cozy cream-colored sweater, is quietly enjoying her coffee." },
        { "level": "advanced", "type": "sentence_starter", "text": "Seated comfortably by the window, the woman..." }
      ]
    },

    {
      "id": "element_002",
      "label": "coffee cup",
      "label_ja": "コーヒーカップ",
      "category": "object",
      "importance": "primary",
      "description": "A small white ceramic cup filled with a hot coffee-based drink is being held close to the woman's face with both hands.",
      "bounding_box_conceptual": [32, 34, 18, 16],
      "color": ["white", "brown"],
      "attributes": ["small", "white", "ceramic", "warm", "hot"],
      "action": ["being held", "being lifted", "being brought close to her lips"],
      "synonyms_and_related_words": ["coffee cup", "cup", "mug", "ceramic cup", "white cup", "coffee", "latte", "cappuccino", "hot drink", "warm beverage"],
      "accepted_words": [
        "coffee cup",
        "cup",
        "mug",
        "ceramic cup",
        "white cup",
        "coffee mug",
        "teacup",
        "drink cup",
        "latte cup",
        "cappuccino cup",
        "vessel"
      ],
      "common_typos": [
        "cofee cup",
        "coffe cup",
        "coffeecup",
        "cop",
        "coup",
        "mugg",
        "ceremic cup",
        "ceramic cub",
        "mugcup",
        "coffe mug"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "cup",
            "ja": "カップ、茶碗"
          },
          {
            "en": "coffee cup",
            "ja": "コーヒーカップ"
          }
        ],
        "A2": [
          {
            "en": "mug",
            "ja": "マグカップ"
          },
          {
            "en": "white cup",
            "ja": "白いカップ"
          }
        ],
        "B1": [
          {
            "en": "ceramic cup",
            "ja": "陶器のカップ"
          },
          {
            "en": "coffee mug",
            "ja": "コーヒー用のマグカップ"
          }
        ],
        "B2": [
          {
            "en": "drinking vessel",
            "ja": "飲み物を入れる容器（フォーマル）"
          },
          {
            "en": "delicate ceramic cup",
            "ja": "繊細な陶器のカップ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a comforting cup held close to her face",
          "ja": "顔の近くに大切そうに持たれた、心を落ち着かせるカップ"
        },
        {
          "en": "a warm cup cradled in both hands",
          "ja": "両手で包み込むように持たれた温かなカップ"
        },
        {
          "en": "a small vessel of comfort",
          "ja": "安らぎを運ぶ小さな器"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "cup, coffee, drink, hot" },
        { "level": "beginner", "type": "grammar", "text": "She is holding a cup. 「彼女はカップを持っています」" },
        { "level": "beginner", "type": "sentence_starter", "text": "She has a..." },
        { "level": "intermediate", "type": "vocabulary", "text": "coffee cup, ceramic cup, hot beverage, latte, cappuccino" },
        { "level": "intermediate", "type": "phrase", "text": "hold the cup with both hands" },
        { "level": "intermediate", "type": "phrase", "text": "bring the cup close to her lips" },
        { "level": "advanced", "type": "grammar", "text": "The white ceramic cup, held gently in both hands, is close to her lips." }
      ]
    },

    {
      "id": "element_003",
      "label": "coffee",
      "label_ja": "コーヒー",
      "category": "food_and_drink",
      "importance": "primary",
      "description": "A warm coffee drink, possibly a latte or cappuccino, is inside the white cup.",
      "bounding_box_conceptual": [34, 38, 5, 7],
      "color": ["brown", "light brown"],
      "attributes": ["warm", "hot", "fresh", "creamy"],
      "action": ["being drunk", "being enjoyed", "being sipped"],
      "synonyms_and_related_words": ["coffee", "hot coffee", "cup of coffee", "latte", "cappuccino", "coffee drink", "hot beverage", "warm drink"],
      "accepted_words": [
        "coffee",
        "hot coffee",
        "cup of coffee",
        "latte",
        "cappuccino",
        "coffee drink",
        "hot beverage",
        "warm drink",
        "beverage",
        "drink",
        "freshly brewed coffee",
        "espresso-based drink"
      ],
      "common_typos": [
        "cofee",
        "coffe",
        "cofee",
        "coffie",
        "cofee drink",
        "lattee",
        "capuccino",
        "cappucino",
        "bevarage",
        "bevrage"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "coffee",
            "ja": "コーヒー"
          },
          {
            "en": "drink",
            "ja": "飲み物"
          }
        ],
        "A2": [
          {
            "en": "hot coffee",
            "ja": "温かいコーヒー"
          },
          {
            "en": "latte",
            "ja": "ラテ"
          }
        ],
        "B1": [
          {
            "en": "beverage",
            "ja": "飲み物（ややフォーマル）"
          },
          {
            "en": "freshly brewed coffee",
            "ja": "淹れたてのコーヒー"
          }
        ],
        "B2": [
          {
            "en": "aromatic coffee",
            "ja": "香り豊かなコーヒー"
          },
          {
            "en": "espresso-based beverage",
            "ja": "エスプレッソをベースにした飲み物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a comforting cup of coffee",
          "ja": "心を落ち着かせる一杯のコーヒー"
        },
        {
          "en": "a freshly brewed drink releasing a rich aroma",
          "ja": "豊かな香りを漂わせる淹れたての飲み物"
        },
        {
          "en": "a small taste of warmth and calm",
          "ja": "温かさと安らぎを感じさせる一杯"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "coffee, drink, hot, warm" },
        { "level": "beginner", "type": "sentence_starter", "text": "She is drinking coffee." },
        { "level": "intermediate", "type": "phrase", "text": "enjoy a warm cup of coffee" },
        { "level": "intermediate", "type": "phrase", "text": "sip her coffee slowly" },
        { "level": "advanced", "type": "phrase", "text": "savor the rich aroma of freshly brewed coffee" }
      ]
    },

    {
      "id": "element_004",
      "label": "wooden table",
      "label_ja": "木製のテーブル",
      "category": "furniture",
      "importance": "primary",
      "description": "A round wooden table stands in front of the woman and holds a notebook, pen, vase, saucer, and spoon.",
      "bounding_box_conceptual": [70, 0, 30, 49],
      "color": ["brown", "light brown", "golden brown"],
      "attributes": ["wooden", "round", "smooth", "shiny"],
      "action": ["holding objects", "standing in front of the woman"],
      "synonyms_and_related_words": ["table", "wooden table", "round table", "cafe table", "desk", "tabletop", "wooden surface"],
      "accepted_words": [
        "table",
        "wooden table",
        "round table",
        "cafe table",
        "desk",
        "tabletop",
        "wooden surface",
        "coffee table",
        "small table"
      ],
      "common_typos": [
        "tabel",
        "tabble",
        "taable",
        "wooden tabel",
        "woden table",
        "roung table",
        "table top",
        "desck",
        "cafee table"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "table",
            "ja": "テーブル、机"
          },
          {
            "en": "wood",
            "ja": "木、木材"
          }
        ],
        "A2": [
          {
            "en": "wooden table",
            "ja": "木製のテーブル"
          },
          {
            "en": "round table",
            "ja": "丸いテーブル"
          }
        ],
        "B1": [
          {
            "en": "tabletop",
            "ja": "テーブルの天板"
          },
          {
            "en": "cafe table",
            "ja": "カフェ用のテーブル"
          }
        ],
        "B2": [
          {
            "en": "polished wooden surface",
            "ja": "磨かれた木製の表面"
          },
          {
            "en": "furnishing",
            "ja": "家具、備品（フォーマル）"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a polished wooden table catching the sunlight",
          "ja": "日差しを受けて輝く磨かれた木製テーブル"
        },
        {
          "en": "a small stage for everyday objects",
          "ja": "日用品が並ぶ小さな舞台"
        },
        {
          "en": "a warm wooden surface anchoring the scene",
          "ja": "場面の中心を落ち着かせる温かな木の表面"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "table, wood, brown, round" },
        { "level": "beginner", "type": "grammar", "text": "There is a table in front of her." },
        { "level": "intermediate", "type": "phrase", "text": "on the wooden table" },
        { "level": "intermediate", "type": "sentence_starter", "text": "Several objects are placed on the wooden table..." },
        { "level": "advanced", "type": "grammar", "text": "The polished wooden table is decorated with flowers and several personal items." }
      ]
    },

    {
      "id": "element_005",
      "label": "notebook",
      "label_ja": "ノート",
      "category": "object",
      "importance": "secondary",
      "description": "A cream-colored notebook with a handwritten positive message is lying on the wooden table next to a black pen.",
      "bounding_box_conceptual": [82, 11, 17, 22],
      "color": ["cream", "beige", "light brown"],
      "attributes": ["open", "cream-colored", "handwritten", "inspiring"],
      "action": ["lying on the table", "resting on the table", "displaying a handwritten message"],
      "synonyms_and_related_words": ["notebook", "journal", "diary", "book", "writing pad", "notes", "pages"],
      "accepted_words": [
        "notebook",
        "journal",
        "diary",
        "book",
        "writing pad",
        "notepad",
        "notes",
        "pages",
        "open notebook",
        "cream-colored notebook"
      ],
      "common_typos": [
        "notbook",
        "note book",
        "notebok",
        "notebock",
        "jurnal",
        "jorunal",
        "dairy",
        "note pad",
        "pagges",
        "boook"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "notebook",
            "ja": "ノート"
          },
          {
            "en": "book",
            "ja": "本"
          }
        ],
        "A2": [
          {
            "en": "notepad",
            "ja": "メモ帳"
          },
          {
            "en": "pages",
            "ja": "ページ"
          }
        ],
        "B1": [
          {
            "en": "journal",
            "ja": "日記帳、記録帳"
          },
          {
            "en": "diary",
            "ja": "日記"
          }
        ],
        "B2": [
          {
            "en": "personal journal",
            "ja": "個人的な記録帳"
          },
          {
            "en": "handwritten reminder",
            "ja": "手書きの注意書き、励ましの言葉"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a notebook filled with gentle reminders",
          "ja": "優しいメッセージが書かれたノート"
        },
        {
          "en": "an open page waiting for a new thought",
          "ja": "新しい考えが書かれるのを待つ開かれたページ"
        },
        {
          "en": "a quiet companion for reflection",
          "ja": "物思いに寄り添う静かな相棒"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "notebook, book, paper, page" },
        { "level": "beginner", "type": "grammar", "text": "There is a notebook on the table." },
        { "level": "beginner", "type": "preposition", "text": "on the table 「テーブルの上に」" },
        { "level": "intermediate", "type": "vocabulary", "text": "journal, diary, handwritten note, positive message" },
        { "level": "intermediate", "type": "sentence_starter", "text": "A notebook with an inspiring message lies on the table..." },
        { "level": "advanced", "type": "grammar", "text": "Lying beside the vase is a notebook containing a handwritten reminder." }
      ]
    },

    {
      "id": "element_006",
      "label": "pen",
      "label_ja": "ペン",
      "category": "object",
      "importance": "secondary",
      "description": "A black pen is lying diagonally on top of the notebook.",
      "bounding_box_conceptual": [91, 23, 4, 8],
      "color": ["black", "gold"],
      "attributes": ["small", "black", "thin"],
      "action": ["lying on the notebook", "resting on the pages"],
      "synonyms_and_related_words": ["pen", "writing pen", "writing tool", "stationery"],
      "accepted_words": [
        "pen",
        "black pen",
        "writing pen",
        "ballpoint pen",
        "writing tool",
        "stationery",
        "ink pen"
      ],
      "common_typos": [
        "pne",
        "penn",
        "pan",
        "ben",
        "balpoint pen",
        "ball point pen",
        "stationary",
        "writting pen"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "pen",
            "ja": "ペン"
          },
          {
            "en": "write",
            "ja": "書く"
          }
        ],
        "A2": [
          {
            "en": "black pen",
            "ja": "黒いペン"
          },
          {
            "en": "writing tool",
            "ja": "筆記用具"
          }
        ],
        "B1": [
          {
            "en": "ballpoint pen",
            "ja": "ボールペン"
          },
          {
            "en": "stationery",
            "ja": "文房具"
          }
        ],
        "B2": [
          {
            "en": "writing instrument",
            "ja": "筆記具（フォーマル）"
          },
          {
            "en": "ink pen",
            "ja": "インクを使うペン"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a pen resting between unfinished thoughts",
          "ja": "書きかけの思いの間で休むペン"
        },
        {
          "en": "a small tool ready to capture an idea",
          "ja": "アイデアを書き留める準備ができた小さな道具"
        },
        {
          "en": "a silent invitation to write",
          "ja": "書くことへ静かに誘うペン"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "pen, write, black" },
        { "level": "beginner", "type": "grammar", "text": "A pen is on the notebook." },
        { "level": "intermediate", "type": "phrase", "text": "a black pen lying on the open notebook" },
        { "level": "advanced", "type": "grammar", "text": "A black pen rests diagonally across the notebook." }
      ]
    },

    {
      "id": "element_007",
      "label": "flower vase",
      "label_ja": "花瓶",
      "category": "decoration",
      "importance": "secondary",
      "description": "A small transparent glass vase filled with delicate white flowers and green stems is placed on the table.",
      "bounding_box_conceptual": [62, 5, 28, 21],
      "color": ["transparent", "white", "green"],
      "attributes": ["small", "glass", "transparent", "delicate", "decorative"],
      "action": ["holding flowers", "standing on the table", "decorating the table"],
      "synonyms_and_related_words": ["vase", "flower vase", "glass vase", "jar", "flower container"],
      "accepted_words": [
        "vase",
        "flower vase",
        "glass vase",
        "jar",
        "flower container",
        "transparent vase",
        "small vase",
        "glass jar"
      ],
      "common_typos": [
        "vaze",
        "vasee",
        "vaise",
        "vas",
        "glase vase",
        "glass vace",
        "jarr",
        "flower vast",
        "transparant vase"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "vase",
            "ja": "花瓶"
          },
          {
            "en": "glass",
            "ja": "ガラス"
          }
        ],
        "A2": [
          {
            "en": "flower vase",
            "ja": "花を入れる花瓶"
          },
          {
            "en": "glass jar",
            "ja": "ガラス瓶"
          }
        ],
        "B1": [
          {
            "en": "transparent vase",
            "ja": "透明な花瓶"
          },
          {
            "en": "flower container",
            "ja": "花を入れる容器"
          }
        ],
        "B2": [
          {
            "en": "delicate glass vessel",
            "ja": "繊細なガラスの器"
          },
          {
            "en": "decorative centerpiece",
            "ja": "装飾の中心となる飾り"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a clear vase holding a cloud of tiny flowers",
          "ja": "小さな花の雲を抱える透明な花瓶"
        },
        {
          "en": "a delicate glass vessel bringing nature indoors",
          "ja": "自然を室内に運ぶ繊細なガラスの器"
        },
        {
          "en": "a sparkling container touched by sunlight",
          "ja": "日差しに触れてきらめく器"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "vase, glass, flower, water" },
        { "level": "beginner", "type": "grammar", "text": "There is a vase on the table." },
        { "level": "intermediate", "type": "phrase", "text": "a glass vase filled with small white flowers" },
        { "level": "advanced", "type": "grammar", "text": "A transparent vase containing a delicate bouquet adds a natural touch to the scene." }
      ]
    },

    {
      "id": "element_008",
      "label": "white flowers",
      "label_ja": "白い花",
      "category": "nature",
      "importance": "secondary",
      "description": "Small delicate white flowers with thin green stems are arranged in the glass vase.",
      "bounding_box_conceptual": [56, 0, 21, 27],
      "color": ["white", "green"],
      "attributes": ["small", "white", "delicate", "fresh", "natural"],
      "action": ["growing from stems", "sitting in a vase", "decorating the table"],
      "synonyms_and_related_words": ["flowers", "white flowers", "small flowers", "bouquet", "blossoms", "baby's breath", "floral arrangement"],
      "accepted_words": [
        "flowers",
        "white flowers",
        "small flowers",
        "bouquet",
        "blossoms",
        "baby's breath",
        "floral arrangement",
        "tiny flowers",
        "delicate flowers",
        "blooms"
      ],
      "common_typos": [
        "flouers",
        "flowres",
        "floweres",
        "whiet flowers",
        "bouqet",
        "boquet",
        "blosoms",
        "babys breath",
        "floral arangement"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "flower",
            "ja": "花"
          },
          {
            "en": "white flowers",
            "ja": "白い花"
          }
        ],
        "A2": [
          {
            "en": "small flowers",
            "ja": "小さな花"
          },
          {
            "en": "bouquet",
            "ja": "花束"
          }
        ],
        "B1": [
          {
            "en": "blossoms",
            "ja": "花、花びらが開いたもの"
          },
          {
            "en": "baby's breath",
            "ja": "カスミソウ"
          }
        ],
        "B2": [
          {
            "en": "floral arrangement",
            "ja": "生け花、花の飾り付け"
          },
          {
            "en": "delicate blooms",
            "ja": "繊細に咲く花々"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a cloud of tiny white blossoms",
          "ja": "小さな白い花が作る雲"
        },
        {
          "en": "delicate blooms brightening the table",
          "ja": "テーブルを明るくする繊細な花々"
        },
        {
          "en": "a whisper of nature in the cafe",
          "ja": "カフェにそっと入り込んだ自然の気配"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "flower, flowers, white, green" },
        { "level": "beginner", "type": "grammar", "text": "There are some white flowers." },
        { "level": "intermediate", "type": "phrase", "text": "a small bouquet of delicate white flowers" },
        { "level": "advanced", "type": "phrase", "text": "delicate white blossoms arranged in a transparent glass vase" }
      ]
    },

    {
      "id": "element_009",
      "label": "saucer and spoon",
      "label_ja": "受け皿とスプーン",
      "category": "object",
      "importance": "secondary",
      "description": "A white saucer with a small metal spoon is placed on the table in front of the woman.",
      "bounding_box_conceptual": [82, 28, 10, 15],
      "color": ["white", "silver"],
      "attributes": ["small", "clean", "white", "metallic"],
      "action": ["resting on the table"],
      "synonyms_and_related_words": ["saucer", "plate", "small plate", "spoon", "teaspoon", "coffee spoon"],
      "accepted_words": [
        "saucer",
        "spoon",
        "saucer and spoon",
        "plate",
        "small plate",
        "teaspoon",
        "coffee spoon",
        "metal spoon",
        "white saucer"
      ],
      "common_typos": [
        "sauser",
        "saucerd",
        "saucer and spone",
        "spoonn",
        "spon",
        "tea spoon",
        "mettal spoon",
        "small plait",
        "saucer and spun"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "spoon",
            "ja": "スプーン"
          },
          {
            "en": "plate",
            "ja": "皿"
          }
        ],
        "A2": [
          {
            "en": "saucer",
            "ja": "カップの受け皿"
          },
          {
            "en": "teaspoon",
            "ja": "小さじ、ティースプーン"
          }
        ],
        "B1": [
          {
            "en": "coffee spoon",
            "ja": "コーヒー用スプーン"
          },
          {
            "en": "metal spoon",
            "ja": "金属製のスプーン"
          }
        ],
        "B2": [
          {
            "en": "tableware",
            "ja": "食卓用の器具類"
          },
          {
            "en": "polished teaspoon",
            "ja": "磨かれた小さなスプーン"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a silver spoon resting on a clean saucer",
          "ja": "きれいな受け皿の上で休む銀色のスプーン"
        },
        {
          "en": "small pieces of tableware catching the light",
          "ja": "光を受ける小さな食器"
        },
        {
          "en": "a quiet detail beside the notebook",
          "ja": "ノートのそばにある静かな細部"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "plate, saucer, spoon" },
        { "level": "beginner", "type": "grammar", "text": "A spoon is on the saucer." },
        { "level": "intermediate", "type": "phrase", "text": "a small metal spoon resting on a white saucer" },
        { "level": "advanced", "type": "grammar", "text": "Beside the notebook sits a white saucer with a spoon resting on it." }
      ]
    },

    {
      "id": "element_010",
      "label": "window",
      "label_ja": "窓",
      "category": "architecture",
      "importance": "primary",
      "description": "A large black-framed window lets warm natural sunlight into the cafe and provides a view of trees and a street outside.",
      "bounding_box_conceptual": [0, 0, 61, 38],
      "color": ["black", "golden", "green"],
      "attributes": ["large", "sunny", "bright", "transparent", "black-framed"],
      "action": ["letting in sunlight", "showing the outside view", "brightening the cafe"],
      "synonyms_and_related_words": ["window", "large window", "cafe window", "windowpane", "glass", "glass window"],
      "accepted_words": [
        "window",
        "large window",
        "cafe window",
        "windowpane",
        "glass",
        "glass window",
        "black-framed window",
        "pane",
        "view"
      ],
      "common_typos": [
        "windo",
        "winow",
        "windoe",
        "windwo",
        "window pain",
        "windowpanee",
        "glasse",
        "black framed window",
        "veiw"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "window",
            "ja": "窓"
          },
          {
            "en": "glass",
            "ja": "ガラス"
          }
        ],
        "A2": [
          {
            "en": "large window",
            "ja": "大きな窓"
          },
          {
            "en": "view",
            "ja": "眺め、景色"
          }
        ],
        "B1": [
          {
            "en": "windowpane",
            "ja": "窓ガラス"
          },
          {
            "en": "black-framed window",
            "ja": "黒い枠の窓"
          }
        ],
        "B2": [
          {
            "en": "expansive window",
            "ja": "広々とした大きな窓"
          },
          {
            "en": "sunlit pane",
            "ja": "日差しを受けた窓ガラス"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a window framing the peaceful outside world",
          "ja": "穏やかな外の世界を額縁のように切り取る窓"
        },
        {
          "en": "a gateway for warm daylight",
          "ja": "暖かな日光を招き入れる入り口"
        },
        {
          "en": "a sunlit frame between the cafe and the street",
          "ja": "カフェと通りを結ぶ日当たりの良い枠"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "window, glass, outside, sunlight" },
        { "level": "beginner", "type": "preposition", "text": "by the window 「窓のそばに」" },
        { "level": "beginner", "type": "grammar", "text": "The woman is sitting by the window." },
        { "level": "intermediate", "type": "phrase", "text": "warm sunlight coming through the window" },
        { "level": "intermediate", "type": "sentence_starter", "text": "Through the large window, we can see..." },
        { "level": "advanced", "type": "grammar", "text": "Warm natural light pours through the large window, creating a peaceful atmosphere." }
      ]
    },

    {
      "id": "element_011",
      "label": "chalkboard menu",
      "label_ja": "黒板のメニュー",
      "category": "sign",
      "importance": "secondary",
      "description": "A black chalkboard menu behind the woman lists several types of coffee drinks in white lettering.",
      "bounding_box_conceptual": [2, 64, 38, 17],
      "color": ["black", "white", "brown"],
      "attributes": ["rectangular", "black", "handwritten", "decorative"],
      "action": ["displaying drink names", "hanging on the wall"],
      "synonyms_and_related_words": ["menu", "menu board", "chalkboard", "chalkboard menu", "coffee menu", "sign", "board"],
      "accepted_words": [
        "menu",
        "menu board",
        "chalkboard",
        "chalkboard menu",
        "coffee menu",
        "sign",
        "board",
        "blackboard menu",
        "drink list"
      ],
      "common_typos": [
        "menue",
        "menuu",
        "menu bord",
        "menuboard",
        "chalk bord",
        "chalkboad",
        "blackbord",
        "cofee menu",
        "drink rist"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "menu",
            "ja": "メニュー"
          },
          {
            "en": "board",
            "ja": "板、掲示板"
          }
        ],
        "A2": [
          {
            "en": "menu board",
            "ja": "メニューボード"
          },
          {
            "en": "coffee menu",
            "ja": "コーヒーのメニュー"
          }
        ],
        "B1": [
          {
            "en": "chalkboard",
            "ja": "黒板"
          },
          {
            "en": "drink list",
            "ja": "飲み物の一覧"
          }
        ],
        "B2": [
          {
            "en": "display board",
            "ja": "表示板、案内板"
          },
          {
            "en": "hand-lettered menu",
            "ja": "手書き文字で作られたメニュー"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a hand-lettered menu inviting customers to choose",
          "ja": "客に注文を促す手書きのメニュー"
        },
        {
          "en": "a blackboard filled with the language of coffee",
          "ja": "コーヒーの言葉で埋められた黒板"
        },
        {
          "en": "a quiet catalogue of warm drinks",
          "ja": "温かな飲み物を並べた静かな一覧"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "menu, board, coffee, black" },
        { "level": "beginner", "type": "grammar", "text": "There is a menu on the wall." },
        { "level": "intermediate", "type": "phrase", "text": "a black menu board listing different coffee drinks" },
        { "level": "advanced", "type": "grammar", "text": "Mounted on the wall is a chalkboard menu displaying a selection of coffee drinks." }
      ]
    },

    {
      "id": "element_012",
      "label": "espresso machine",
      "label_ja": "エスプレッソマシン",
      "category": "equipment",
      "importance": "secondary",
      "description": "A large commercial espresso machine is located on the cafe counter in the right background.",
      "bounding_box_conceptual": [36, 85, 32, 15],
      "color": ["black", "silver"],
      "attributes": ["large", "commercial", "metallic", "professional"],
      "action": ["standing on the counter", "being used to make coffee"],
      "synonyms_and_related_words": ["coffee machine", "espresso machine", "coffee maker", "commercial coffee machine", "cafe equipment"],
      "accepted_words": [
        "espresso machine",
        "coffee machine",
        "coffee maker",
        "commercial coffee machine",
        "cafe equipment",
        "espresso maker",
        "professional coffee machine"
      ],
      "common_typos": [
        "expresso machine",
        "espresso mashine",
        "cofee machine",
        "coffee mashine",
        "coffe maker",
        "cofee maker",
        "espressso machine",
        "comercial machine"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "coffee machine",
            "ja": "コーヒーマシン"
          },
          {
            "en": "coffee maker",
            "ja": "コーヒーを作る機械"
          }
        ],
        "A2": [
          {
            "en": "espresso machine",
            "ja": "エスプレッソマシン"
          },
          {
            "en": "machine",
            "ja": "機械"
          }
        ],
        "B1": [
          {
            "en": "commercial coffee machine",
            "ja": "業務用コーヒーマシン"
          },
          {
            "en": "cafe equipment",
            "ja": "カフェの設備"
          }
        ],
        "B2": [
          {
            "en": "professional espresso machine",
            "ja": "業務用の本格的なエスプレッソマシン"
          },
          {
            "en": "brewing equipment",
            "ja": "抽出用の設備"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "the machine at the heart of the cafe",
          "ja": "カフェの中心となるマシン"
        },
        {
          "en": "a polished machine ready to brew the next cup",
          "ja": "次の一杯を淹れる準備ができた磨かれた機械"
        },
        {
          "en": "the quiet engine behind every coffee",
          "ja": "一杯一杯のコーヒーを支える静かなエンジン"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "machine, coffee machine, coffee maker" },
        { "level": "beginner", "type": "grammar", "text": "There is a coffee machine in the background." },
        { "level": "intermediate", "type": "phrase", "text": "a large espresso machine behind the counter" },
        { "level": "advanced", "type": "grammar", "text": "A professional espresso machine can be seen behind the woman." }
      ]
    },

    {
      "id": "element_013",
      "label": "pendant lights",
      "label_ja": "吊り下げ照明",
      "category": "lighting",
      "importance": "secondary",
      "description": "Two warm pendant lights with exposed bulbs hang from the ceiling in the upper right part of the cafe.",
      "bounding_box_conceptual": [0, 76, 21, 24],
      "color": ["black", "golden", "orange"],
      "attributes": ["warm", "hanging", "bright", "decorative"],
      "action": ["hanging from the ceiling", "giving off warm light", "illuminating the cafe"],
      "synonyms_and_related_words": ["light", "lamp", "pendant light", "hanging lamp", "light bulb", "ceiling light"],
      "accepted_words": [
        "lights",
        "lamps",
        "pendant lights",
        "hanging lamps",
        "light bulbs",
        "ceiling lights",
        "hanging lights",
        "bulbs",
        "fixtures"
      ],
      "common_typos": [
        "ligths",
        "lites",
        "lampss",
        "pendant ligths",
        "hanging lump",
        "light blubs",
        "ceilling lights",
        "bulps",
        "fixures"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "light",
            "ja": "明かり、照明"
          },
          {
            "en": "lamp",
            "ja": "ランプ"
          }
        ],
        "A2": [
          {
            "en": "light bulb",
            "ja": "電球"
          },
          {
            "en": "ceiling light",
            "ja": "天井の照明"
          }
        ],
        "B1": [
          {
            "en": "pendant light",
            "ja": "吊り下げ式の照明"
          },
          {
            "en": "hanging lamp",
            "ja": "吊り下げランプ"
          }
        ],
        "B2": [
          {
            "en": "lighting fixture",
            "ja": "照明器具"
          },
          {
            "en": "exposed bulb",
            "ja": "覆いのない電球"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "warm lights glowing like small suns",
          "ja": "小さな太陽のように輝く暖かな照明"
        },
        {
          "en": "pendant lamps casting a gentle glow",
          "ja": "柔らかな光を落とす吊り下げランプ"
        },
        {
          "en": "golden bulbs warming the quiet interior",
          "ja": "静かな店内を温かく照らす金色の電球"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "light, lamp, bulb, ceiling" },
        { "level": "beginner", "type": "grammar", "text": "Two lights are hanging from the ceiling." },
        { "level": "intermediate", "type": "phrase", "text": "warm pendant lights hanging from the ceiling" },
        { "level": "advanced", "type": "phrase", "text": "soft pendant lighting enhances the cafe's warm and inviting atmosphere" }
      ]
    },

    {
      "id": "element_014",
      "label": "plants",
      "label_ja": "植物",
      "category": "nature",
      "importance": "secondary",
      "description": "Several green plants decorate the window area and wooden shelves in the cafe.",
      "bounding_box_conceptual": [0, 0, 40, 100],
      "color": ["green"],
      "attributes": ["green", "natural", "fresh", "decorative"],
      "action": ["decorating the cafe", "growing", "adding greenery"],
      "synonyms_and_related_words": ["plant", "plants", "greenery", "potted plant", "indoor plant", "leaves", "foliage"],
      "accepted_words": [
        "plant",
        "plants",
        "green plants",
        "greenery",
        "potted plant",
        "indoor plant",
        "leaves",
        "foliage",
        "vines",
        "houseplants"
      ],
      "common_typos": [
        "plantts",
        "plantes",
        "palnt",
        "greenary",
        "greenrey",
        "potted palnt",
        "indor plant",
        "leafs",
        "foilage",
        "folliage"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "plant",
            "ja": "植物"
          },
          {
            "en": "leaves",
            "ja": "葉"
          }
        ],
        "A2": [
          {
            "en": "green plants",
            "ja": "緑の植物"
          },
          {
            "en": "potted plant",
            "ja": "鉢植え"
          }
        ],
        "B1": [
          {
            "en": "greenery",
            "ja": "緑の植物全体"
          },
          {
            "en": "indoor plant",
            "ja": "観葉植物"
          }
        ],
        "B2": [
          {
            "en": "foliage",
            "ja": "葉、植物の茂み"
          },
          {
            "en": "lush greenery",
            "ja": "青々と茂る植物"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "greenery breathing life into the cafe",
          "ja": "カフェに生命感を吹き込む緑"
        },
        {
          "en": "leaves reaching toward the sunlight",
          "ja": "日差しへ向かって伸びる葉"
        },
        {
          "en": "a touch of nature softening the interior",
          "ja": "店内をやわらかな印象にする自然の気配"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "plant, leaf, leaves, green" },
        { "level": "beginner", "type": "grammar", "text": "There are some green plants." },
        { "level": "intermediate", "type": "phrase", "text": "green plants decorating the cafe" },
        { "level": "advanced", "type": "phrase", "text": "The lush greenery gives the interior a fresh and natural feel." }
      ]
    },

    {
      "id": "element_015",
      "label": "cafe interior",
      "label_ja": "カフェの店内",
      "category": "place",
      "importance": "primary",
      "description": "A cozy and warmly lit cafe interior featuring wooden furniture, plants, a coffee counter, shelves, and soft natural sunlight.",
      "bounding_box_conceptual": [0, 0, 100, 100],
      "color": ["beige", "brown", "cream", "green", "golden"],
      "attributes": ["cozy", "warm", "quiet", "peaceful", "relaxed", "inviting", "sunlit", "comfortable"],
      "action": ["providing a peaceful atmosphere", "surrounding the woman"],
      "synonyms_and_related_words": ["cafe", "coffee shop", "coffeehouse", "cafe interior", "coffee shop interior", "cozy place", "quiet cafe"],
      "accepted_words": [
        "cafe",
        "coffee shop",
        "coffeehouse",
        "cafe interior",
        "coffee shop interior",
        "cozy place",
        "quiet cafe",
        "shop",
        "interior",
        "establishment",
        "room"
      ],
      "common_typos": [
        "caffe",
        "cafea",
        "kafe",
        "cofee shop",
        "coffe shop",
        "coffeehousee",
        "interor",
        "establisment",
        "cozy caffe"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "cafe",
            "ja": "カフェ"
          },
          {
            "en": "shop",
            "ja": "店"
          }
        ],
        "A2": [
          {
            "en": "coffee shop",
            "ja": "コーヒーショップ"
          },
          {
            "en": "inside",
            "ja": "店内、中に"
          }
        ],
        "B1": [
          {
            "en": "cafe interior",
            "ja": "カフェの店内"
          },
          {
            "en": "atmosphere",
            "ja": "雰囲気"
          }
        ],
        "B2": [
          {
            "en": "establishment",
            "ja": "店舗、施設（フォーマル）"
          },
          {
            "en": "ambiance",
            "ja": "その場所特有の雰囲気"
          },
          {
            "en": "cozy haven",
            "ja": "居心地の良い安らぎの場"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a sunlit corner of the cafe",
          "ja": "カフェの陽当たりの良い片隅"
        },
        {
          "en": "a cozy haven from the busy world",
          "ja": "忙しい世界から離れられる居心地の良い安らぎの場"
        },
        {
          "en": "a warm interior wrapped in quietness",
          "ja": "静けさに包まれた暖かな店内"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "cafe, coffee shop, inside, room" },
        { "level": "beginner", "type": "grammar", "text": "The woman is in a cafe." },
        { "level": "intermediate", "type": "phrase", "text": "inside a cozy and peaceful coffee shop" },
        { "level": "advanced", "type": "sentence_starter", "text": "The warmly lit cafe creates a serene and inviting atmosphere..." }
      ]
    },

    {
      "id": "element_016",
      "label": "sunlight",
      "label_ja": "日差し",
      "category": "environment",
      "importance": "secondary",
      "description": "Warm golden sunlight enters through the large window and illuminates the woman, table, and surrounding cafe interior.",
      "bounding_box_conceptual": [0, 0, 100, 70],
      "color": ["golden", "yellow", "warm white"],
      "attributes": ["warm", "golden", "soft", "natural", "bright"],
      "action": ["coming through the window", "shining into the cafe", "illuminating the woman", "creating shadows"],
      "synonyms_and_related_words": ["sunlight", "sunshine", "natural light", "daylight", "warm light", "golden light", "sunbeam"],
      "accepted_words": [
        "sunlight",
        "sunshine",
        "natural light",
        "daylight",
        "warm light",
        "golden light",
        "sunbeam",
        "light",
        "sun rays",
        "rays of light"
      ],
      "common_typos": [
        "sunligt",
        "sunligh",
        "sunlite",
        "sunshie",
        "naturul light",
        "day ligth",
        "goldan light",
        "sun beem",
        "sunrayss"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "light",
            "ja": "光、明かり"
          },
          {
            "en": "sun",
            "ja": "太陽"
          }
        ],
        "A2": [
          {
            "en": "sunlight",
            "ja": "日光、日差し"
          },
          {
            "en": "daylight",
            "ja": "昼の自然光"
          }
        ],
        "B1": [
          {
            "en": "natural light",
            "ja": "自然光"
          },
          {
            "en": "sunbeam",
            "ja": "一筋の日差し"
          }
        ],
        "B2": [
          {
            "en": "golden light",
            "ja": "金色に見える暖かな光"
          },
          {
            "en": "radiant sunlight",
            "ja": "明るく輝く日差し"
          },
          {
            "en": "soft illumination",
            "ja": "柔らかな照明、光"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "warm sunlight pouring through the window",
          "ja": "窓から流れ込む暖かな日差し"
        },
        {
          "en": "golden light bathing the cafe",
          "ja": "カフェ全体を包み込む金色の光"
        },
        {
          "en": "sunbeams painting the room with warmth",
          "ja": "店内を温かい色に染める日差し"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "sun, sunlight, light, bright" },
        { "level": "beginner", "type": "grammar", "text": "Sunlight is coming through the window." },
        { "level": "intermediate", "type": "phrase", "text": "warm natural light filling the cafe" },
        { "level": "advanced", "type": "grammar", "text": "Streaming through the window, the golden sunlight gives the scene a gentle and peaceful atmosphere." }
      ]
    }
  ],

  "text_elements": [
    {
      "id": "text_001",
      "location": "window on the left side",
      "content": "Good coffee Good mood Good day ♡",
      "description_ja": "窓ガラスに書かれた、コーヒーと良い気分や一日を結びつける前向きなメッセージ。",
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "good, coffee, mood, day" },
        { "level": "beginner", "type": "phrase", "text": "a positive message 「前向きなメッセージ」" },
        { "level": "beginner", "type": "sentence_starter", "text": "The window says..." },
        { "level": "intermediate", "type": "phrase", "text": "a positive message written on the glass" },
        { "level": "intermediate", "type": "sentence_starter", "text": "Written on the window are the words..." },
        { "level": "advanced", "type": "phrase", "text": "The window glass is decorated with a handwritten quote reading, \"Good coffee, Good mood, Good day,\" followed by a heart symbol." }
      ]
    },

    {
      "id": "text_002",
      "location": "notebook on the table",
      "content": "Be kind Be you Be happy ♡",
      "description_ja": "ノートに手書きされた、自分らしさや優しさ、幸福を大切にする前向きなメッセージ。",
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "be, kind, you, happy" },
        { "level": "beginner", "type": "grammar", "text": "Be kind. 「親切にしよう」命令形を使った呼びかけです。" },
        { "level": "beginner", "type": "sentence_starter", "text": "The notebook says..." },
        { "level": "intermediate", "type": "phrase", "text": "an inspiring message written in the notebook" },
        { "level": "intermediate", "type": "sentence_starter", "text": "The notebook contains a positive reminder..." },
        { "level": "advanced", "type": "phrase", "text": "An inspiring reminder handwritten on the notebook encourages the reader to be kind, be themselves, and be happy." }
      ]
    },

    {
      "id": "text_003",
      "location": "chalkboard menu behind the woman",
      "content": "COFFEE ESPRESSO AMERICANO LATTE CAPPUCCINO MOCHA FILTER Thank you!",
      "description_ja": "黒板メニューには、エスプレッソ、アメリカーノ、ラテ、カプチーノ、モカなどのコーヒーの種類が書かれている。",
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "coffee, espresso, latte, cappuccino, menu" },
        { "level": "beginner", "type": "grammar", "text": "The menu shows different kinds of coffee." },
        { "level": "intermediate", "type": "phrase", "text": "a menu listing several types of coffee" },
        { "level": "advanced", "type": "phrase", "text": "The chalkboard menu displays a selection of coffee drinks, including espresso, Americano, latte, cappuccino, and mocha." }
      ]
    }
  ],

  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Drinking or sipping coffee from a cup",
      "description_ja": "カップからコーヒーを飲む、または少しずつ味わう",
      "involved_elements": ["element_001", "element_002", "element_003"],
      "synonyms": ["drink coffee", "drinking coffee", "sip coffee", "sipping coffee", "have coffee", "having coffee", "enjoy coffee", "enjoying a cup of coffee", "savor coffee", "taste the coffee"],
      "accepted_words": [
        "drink",
        "drinks",
        "drinking",
        "sip",
        "sips",
        "sipping",
        "have",
        "having",
        "enjoy",
        "enjoying",
        "savor",
        "savoring",
        "taste",
        "tasting",
        "consume",
        "consuming"
      ],
      "common_typos": [
        "driking",
        "drinkin",
        "dringking",
        "siping",
        "sippping",
        "haveing",
        "enjoing",
        "savorring",
        "tastting",
        "consumming"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "drink",
            "ja": "飲む"
          },
          {
            "en": "drinking",
            "ja": "飲んでいる"
          }
        ],
        "A2": [
          {
            "en": "have coffee",
            "ja": "コーヒーを飲む、楽しむ"
          },
          {
            "en": "sip",
            "ja": "少しずつ飲む"
          }
        ],
        "B1": [
          {
            "en": "enjoy",
            "ja": "味わう、楽しむ"
          },
          {
            "en": "sipping",
            "ja": "少しずつ口にしている"
          }
        ],
        "B2": [
          {
            "en": "savor",
            "ja": "味や香りをじっくり味わう"
          },
          {
            "en": "consume",
            "ja": "飲食する（フォーマル）"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "savoring every quiet sip",
          "ja": "静かな一口一口をじっくり味わっている"
        },
        {
          "en": "letting the warmth of the coffee slow down the moment",
          "ja": "コーヒーの温かさで時間がゆっくりになるのを感じている"
        },
        {
          "en": "tasting a brief escape from the busy day",
          "ja": "忙しい一日から少し離れるように一杯を味わっている"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "drink, coffee, cup, sip" },
        { "level": "beginner", "type": "grammar", "text": "A woman is drinking coffee. 現在進行形は「今〜している」を表します。" },
        { "level": "beginner", "type": "sentence_starter", "text": "She is drinking..." },
        { "level": "intermediate", "type": "phrase", "text": "sip coffee slowly" },
        { "level": "intermediate", "type": "phrase", "text": "enjoy a warm cup of coffee" },
        { "level": "advanced", "type": "sentence_starter", "text": "Holding the cup close to her lips, the woman..." },
        { "level": "advanced", "type": "phrase", "text": "The woman appears to be savoring every sip of her coffee." }
      ]
    },

    {
      "id": "action_002",
      "description": "Holding a cup with both hands",
      "description_ja": "両手でカップを持っている",
      "involved_elements": ["element_001", "element_002"],
      "synonyms": ["hold", "holding", "grip", "grasp", "cradle", "cup in both hands", "hold gently", "bring close to her face"],
      "accepted_words": [
        "hold",
        "holds",
        "holding",
        "grip",
        "grips",
        "gripping",
        "grasp",
        "grasping",
        "cradle",
        "cradling",
        "carry",
        "carrying",
        "cup in both hands"
      ],
      "common_typos": [
        "holing",
        "hoding",
        "holdng",
        "griping",
        "graspng",
        "cradel",
        "cradeling",
        "carying",
        "carrrying",
        "both hand"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "hold",
            "ja": "持つ"
          },
          {
            "en": "holding",
            "ja": "持っている"
          }
        ],
        "A2": [
          {
            "en": "carry",
            "ja": "持ち運ぶ"
          },
          {
            "en": "with both hands",
            "ja": "両手で"
          }
        ],
        "B1": [
          {
            "en": "grasp",
            "ja": "しっかり握る"
          },
          {
            "en": "grip",
            "ja": "握る"
          }
        ],
        "B2": [
          {
            "en": "cradle",
            "ja": "大切そうに両手で包む"
          },
          {
            "en": "clasp",
            "ja": "両手などでしっかり持つ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "cradling the cup as if it were a source of comfort",
          "ja": "安らぎの源であるかのようにカップを包み込んでいる"
        },
        {
          "en": "warming her hands around the cup",
          "ja": "カップを囲むように持ち、手を温めている"
        },
        {
          "en": "holding a small pocket of warmth",
          "ja": "小さな温もりを手の中に抱えている"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "grammar", "text": "She is holding a cup." },
        { "level": "beginner", "type": "phrase", "text": "with both hands 「両手で」" },
        { "level": "intermediate", "type": "sentence_starter", "text": "She is gently holding the cup with both hands..." },
        { "level": "advanced", "type": "grammar", "text": "Cradling the warm cup in both hands, she appears calm and relaxed." }
      ]
    },

    {
      "id": "action_003",
      "description": "Sitting by the window",
      "description_ja": "窓辺に座っている",
      "involved_elements": ["element_001", "element_010"],
      "synonyms": ["sit by the window", "sit near the window", "sit beside the window", "be seated by the window", "relax by the window"],
      "accepted_words": [
        "sit",
        "sits",
        "sitting",
        "be seated",
        "seated",
        "sit by the window",
        "sit near the window",
        "sit beside the window",
        "relax by the window",
        "rest by the window"
      ],
      "common_typos": [
        "siting",
        "sittting",
        "seeted",
        "seatted",
        "seting",
        "beside the widnow",
        "near the windo",
        "sitt by",
        "sittting by"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "sit",
            "ja": "座る"
          },
          {
            "en": "sitting",
            "ja": "座っている"
          }
        ],
        "A2": [
          {
            "en": "sit by the window",
            "ja": "窓のそばに座る"
          },
          {
            "en": "sit beside",
            "ja": "〜のすぐ横に座る"
          }
        ],
        "B1": [
          {
            "en": "be seated",
            "ja": "座っている（やや丁寧）"
          },
          {
            "en": "rest by the window",
            "ja": "窓辺で休む"
          }
        ],
        "B2": [
          {
            "en": "recline",
            "ja": "もたれてくつろぐ"
          },
          {
            "en": "settle into a seat",
            "ja": "席に落ち着いて座る"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "settling into a sunlit seat by the window",
          "ja": "日当たりの良い窓辺の席に落ち着いている"
        },
        {
          "en": "occupying a quiet corner beside the glass",
          "ja": "窓ガラスのそばの静かな一角で過ごしている"
        },
        {
          "en": "sitting where the daylight gently reaches her",
          "ja": "日差しが優しく届く場所に座っている"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "sit, chair, window" },
        { "level": "beginner", "type": "preposition", "text": "by the window 「窓のそばに」" },
        { "level": "beginner", "type": "grammar", "text": "She is sitting by the window." },
        { "level": "intermediate", "type": "phrase", "text": "comfortably seated beside the large window" },
        { "level": "advanced", "type": "grammar", "text": "Seated comfortably beside the sunlit window, she enjoys a peaceful moment alone." }
      ]
    },

    {
      "id": "action_004",
      "description": "Relaxing and enjoying a quiet moment",
      "description_ja": "静かな時間を楽しみながらくつろいでいる",
      "involved_elements": ["element_001", "element_015"],
      "synonyms": ["relax", "relaxing", "rest", "resting", "unwind", "unwinding", "take a break", "enjoy a quiet moment", "spend time alone", "enjoy some peace and quiet"],
      "accepted_words": [
        "relax",
        "relaxes",
        "relaxing",
        "rest",
        "resting",
        "unwind",
        "unwinding",
        "take a break",
        "taking a break",
        "enjoy a quiet moment",
        "spend time alone",
        "enjoy some peace and quiet"
      ],
      "common_typos": [
        "relaxxing",
        "relaxng",
        "restting",
        "unwindingg",
        "unwindng",
        "takeing a break",
        "enjoing a quiet moment",
        "quite moment",
        "peacefull moment"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "rest",
            "ja": "休む"
          },
          {
            "en": "relax",
            "ja": "くつろぐ"
          }
        ],
        "A2": [
          {
            "en": "take a break",
            "ja": "休憩する"
          },
          {
            "en": "spend time alone",
            "ja": "一人で時間を過ごす"
          }
        ],
        "B1": [
          {
            "en": "unwind",
            "ja": "緊張をほぐしてくつろぐ"
          },
          {
            "en": "enjoy a quiet moment",
            "ja": "静かなひとときを楽しむ"
          }
        ],
        "B2": [
          {
            "en": "recharge",
            "ja": "心身を休めて元気を取り戻す"
          },
          {
            "en": "find solitude",
            "ja": "一人でいられる静けさを見つける"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "stepping away from the noise of everyday life",
          "ja": "日常の騒がしさから少し離れている"
        },
        {
          "en": "allowing the peaceful atmosphere to calm her mind",
          "ja": "穏やかな雰囲気に心を落ち着かせてもらっている"
        },
        {
          "en": "lingering in a rare moment of solitude",
          "ja": "めったにない一人の静かな時間をゆっくり味わっている"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "vocabulary", "text": "relax, rest, quiet, calm" },
        { "level": "beginner", "type": "sentence_starter", "text": "She looks..." },
        { "level": "intermediate", "type": "phrase", "text": "enjoying a peaceful moment alone" },
        { "level": "intermediate", "type": "phrase", "text": "taking a relaxing break from her daily routine" },
        { "level": "advanced", "type": "sentence_starter", "text": "Surrounded by warm light and a cozy atmosphere, she..." }
      ]
    },

    {
      "id": "action_005",
      "description": "Sunlight coming through the window",
      "description_ja": "窓から日差しが差し込んでいる",
      "involved_elements": ["element_010", "element_016"],
      "synonyms": ["sunlight comes through the window", "light enters the cafe", "sunlight pours in", "sunlight streams through the window", "natural light fills the room", "golden light shines into the cafe"],
      "accepted_words": [
        "come through",
        "coming through",
        "shine",
        "shining",
        "stream",
        "streaming",
        "pour in",
        "pouring in",
        "enter",
        "entering",
        "fill",
        "filling",
        "illuminate",
        "illuminating",
        "bathe",
        "bathing"
      ],
      "common_typos": [
        "comeing through",
        "shinning",
        "streamming",
        "pourring in",
        "enterring",
        "fillling",
        "iluminate",
        "illuminatting",
        "bathng",
        "sunlight comming"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "shine",
            "ja": "光る、照らす"
          },
          {
            "en": "come through",
            "ja": "〜を通って入ってくる"
          }
        ],
        "A2": [
          {
            "en": "fill the room",
            "ja": "部屋を満たす"
          },
          {
            "en": "pour in",
            "ja": "大量に差し込む"
          }
        ],
        "B1": [
          {
            "en": "stream through",
            "ja": "流れるように差し込む"
          },
          {
            "en": "illuminate",
            "ja": "明るく照らす"
          }
        ],
        "B2": [
          {
            "en": "bathe in light",
            "ja": "光で包み込む"
          },
          {
            "en": "filter through",
            "ja": "弱まりながら差し込む"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "sunlight spilling gently across the room",
          "ja": "日差しが店内に優しくこぼれている"
        },
        {
          "en": "golden light washing over the cafe",
          "ja": "金色の光がカフェ全体を洗うように包んでいる"
        },
        {
          "en": "daylight weaving warmth into the scene",
          "ja": "日光が場面に温かさを織り込んでいる"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "grammar", "text": "Sunlight is coming through the window." },
        { "level": "intermediate", "type": "phrase", "text": "warm natural light filling the cafe" },
        { "level": "advanced", "type": "grammar", "text": "Streaming through the large window, the golden sunlight fills the cafe with warmth." }
      ]
    },

    {
      "id": "action_006",
      "description": "Objects resting on the table",
      "description_ja": "物がテーブルの上に置かれている",
      "involved_elements": ["element_004", "element_005", "element_006", "element_007", "element_009"],
      "synonyms": ["be on the table", "sit on the table", "rest on the table", "lie on the table", "be placed on the table", "be arranged on the table"],
      "accepted_words": [
        "rest",
        "resting",
        "lie",
        "lying",
        "sit",
        "sitting",
        "be placed",
        "placed",
        "be arranged",
        "arranged",
        "stand",
        "standing",
        "be on the table",
        "remain",
        "remaining"
      ],
      "common_typos": [
        "restting",
        "lieing",
        "lyeing",
        "siting",
        "plased",
        "arrangged",
        "standng",
        "on the tabel",
        "remaning",
        "are place"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "be on",
            "ja": "〜の上にある"
          },
          {
            "en": "sit on",
            "ja": "〜の上に置かれている"
          }
        ],
        "A2": [
          {
            "en": "lie on",
            "ja": "〜の上に横たわる"
          },
          {
            "en": "be placed",
            "ja": "置かれている"
          }
        ],
        "B1": [
          {
            "en": "rest on",
            "ja": "〜の上に静かに置かれている"
          },
          {
            "en": "be arranged",
            "ja": "並べられている"
          }
        ],
        "B2": [
          {
            "en": "be positioned",
            "ja": "特定の位置に置かれている"
          },
          {
            "en": "be neatly displayed",
            "ja": "きちんと見えるように並べられている"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "small objects forming a quiet still life",
          "ja": "小物が静物画のような景色を作っている"
        },
        {
          "en": "everyday items resting in a careful arrangement",
          "ja": "日用品が丁寧に配置されている"
        },
        {
          "en": "the table holding the traces of a peaceful pause",
          "ja": "テーブルが穏やかな休憩の跡を受け止めている"
        }
      ],
      "hints": [
        { "level": "beginner", "type": "grammar", "text": "There is a notebook on the table." },
        { "level": "beginner", "type": "grammar", "text": "There are some flowers on the table." },
        { "level": "intermediate", "type": "sentence_starter", "text": "On the wooden table, there are..." },
        { "level": "advanced", "type": "grammar", "text": "Arranged neatly on the wooden table are a notebook, a pen, a vase of flowers, and a saucer." }
      ]
    }
  ],

  "spatial_relationships": [
    { "subject": "woman", "relationship": "by", "object": "window", "example_beginner": "The woman is by the window.", "example_intermediate": "The woman is sitting beside a large window." },
    { "subject": "notebook", "relationship": "on", "object": "table", "example_beginner": "The notebook is on the table.", "example_intermediate": "A cream-colored notebook is lying on the wooden table." },
    { "subject": "pen", "relationship": "on", "object": "notebook", "example_beginner": "The pen is on the notebook.", "example_intermediate": "A black pen is resting diagonally on the notebook." },
    { "subject": "vase", "relationship": "on", "object": "table", "example_beginner": "The vase is on the table.", "example_intermediate": "A small glass vase is standing near the edge of the table." },
    { "subject": "chalkboard menu", "relationship": "behind", "object": "woman", "example_beginner": "The menu is behind the woman.", "example_intermediate": "A black chalkboard menu hangs on the wall behind her." },
    { "subject": "espresso machine", "relationship": "in the background behind", "object": "woman", "example_beginner": "There is a coffee machine in the background.", "example_intermediate": "A large espresso machine can be seen behind the woman." },
    { "subject": "pendant lights", "relationship": "above", "object": "cafe counter", "example_beginner": "The lights are above the counter.", "example_intermediate": "Warm pendant lights are hanging from the ceiling above the counter." }
  ],

  "adjective_library": {
    "person": ["young", "calm", "relaxed", "peaceful", "serene", "thoughtful", "comfortable", "content"],
    "cafe": ["cozy", "warm", "quiet", "peaceful", "inviting", "comfortable", "sunlit", "pleasant", "homey"],
    "light": ["warm", "golden", "natural", "soft", "bright", "gentle"],
    "flowers": ["white", "small", "delicate", "fresh", "beautiful"],
    "coffee": ["hot", "warm", "fresh", "creamy", "rich", "aromatic"]
  },

  "preposition_library": [
    { "preposition": "in", "meaning_ja": "〜の中に", "example": "The woman is sitting in a cafe." },
    { "preposition": "on", "meaning_ja": "〜の上に", "example": "There is a notebook on the table." },
    { "preposition": "by", "meaning_ja": "〜のそばに", "example": "The woman is sitting by the window." },
    { "preposition": "beside", "meaning_ja": "〜のすぐ横に", "example": "The vase is beside the notebook." },
    { "preposition": "behind", "meaning_ja": "〜の後ろに", "example": "The menu board is behind the woman." },
    { "preposition": "above", "meaning_ja": "〜の上方に", "example": "The lights are hanging above the counter." },
    { "preposition": "through", "meaning_ja": "〜を通って", "example": "Sunlight is coming through the window." },
    { "preposition": "with", "meaning_ja": "〜を持って、〜とともに", "example": "She is holding the cup with both hands." }
  ],

  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "Subject + be + present participle (-ing)",
      "label_ja": "現在進行形",
      "level": "beginner",
      "purpose_ja": "画像の中で今行われている動作を説明する。",
      "examples": ["A woman is drinking coffee.", "She is holding a cup.", "Sunlight is coming through the window.", "Two lights are hanging from the ceiling."],
      "hints": ["「主語 + am/is/are + 動詞ing」で「今〜しています」を表します。", "人物の動作を説明するときに最も使いやすい形です。"]
    },

    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "画像の中に何があるかを説明する。",
      "examples": ["There is a woman in the cafe.", "There is a notebook on the table.", "There are some white flowers in the vase.", "There are two lights above the counter."],
      "hints": ["1つなら There is、複数なら There are を使います。", "何から書けばよいか分からないときに非常に便利です。"]
    },

    {
      "id": "grammar_003",
      "pattern": "Subject + be + adjective",
      "label_ja": "be動詞と形容詞",
      "level": "beginner",
      "purpose_ja": "人や場所の状態、雰囲気、特徴を説明する。",
      "examples": ["The woman is calm.", "The cafe is cozy.", "The room is bright.", "The flowers are white."],
      "hints": ["be動詞の後ろに calm, cozy, warm などの形容詞を置きます。"]
    },

    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "場所を表す前置詞",
      "level": "beginner",
      "purpose_ja": "物や人物の位置関係を説明する。",
      "examples": ["The woman is by the window.", "The notebook is on the table.", "The menu is behind the woman.", "The lights are above the counter."],
      "hints": ["on, by, beside, behind, above などを使うと画像を詳しく説明できます。"]
    },

    {
      "id": "grammar_005",
      "pattern": "Subject + who / which / that + verb",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物について追加情報を説明する。",
      "examples": ["The woman who is sitting by the window is drinking coffee.", "The notebook that is lying on the table has a positive message.", "The window, which lets in warm sunlight, makes the cafe feel bright."],
      "hints": ["人には who、物には which または that が使えます。", "短い文をつないで、より詳しい説明にできます。"]
    },

    {
      "id": "grammar_006",
      "pattern": "Subject + be + past participle",
      "label_ja": "受動態",
      "level": "intermediate",
      "purpose_ja": "物が置かれている、書かれている、飾られている状態を説明する。",
      "examples": ["A notebook is placed on the table.", "A positive message is written on the window.", "The cafe is decorated with green plants.", "Several coffee drinks are listed on the menu."],
      "hints": ["「be動詞 + 過去分詞」で「〜されている」を表します。"]
    },

    {
      "id": "grammar_007",
      "pattern": "Subject, dressed in / holding / sitting..., + verb",
      "label_ja": "分詞による追加説明",
      "level": "intermediate",
      "purpose_ja": "人物や物に追加情報を自然に付け加える。",
      "examples": ["The woman, dressed in a cream-colored sweater, is drinking coffee.", "The woman, holding a white cup with both hands, looks relaxed.", "A vase containing white flowers is sitting on the table."],
      "hints": ["主語の後に追加情報を挟むと、より豊かな英文になります。"]
    },

    {
      "id": "grammar_008",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "2つの関連した動作や状況を自然につなげる。",
      "examples": ["Holding the cup with both hands, the woman quietly enjoys her coffee.", "Sitting beside the window, she takes a peaceful break.", "Streaming through the window, the sunlight fills the cafe with warmth."],
      "hints": ["主語が同じ場合、動詞ingから始めて状況を追加できます。", "より自然で高度な画像描写に適しています。"]
    },

    {
      "id": "grammar_009",
      "pattern": "Past participial phrase, main clause",
      "label_ja": "過去分詞を使った分詞構文",
      "level": "advanced",
      "purpose_ja": "受け身の状態を文頭で説明する。",
      "examples": ["Surrounded by warm light, the woman appears peaceful.", "Dressed in a cozy sweater, she enjoys her coffee by the window.", "Decorated with green plants, the cafe feels fresh and inviting."],
      "hints": ["「〜に囲まれて」「〜を着て」など、受け身の状態を短く表現できます。"]
    },

    {
      "id": "grammar_010",
      "pattern": "Not only A but also B",
      "label_ja": "相関接続詞",
      "level": "advanced",
      "purpose_ja": "2つの特徴や効果を強調する。",
      "examples": ["The sunlight not only brightens the cafe but also creates a peaceful atmosphere.", "The flowers not only decorate the table but also add a natural touch to the scene."],
      "hints": ["「AだけでなくBも」という意味で、文章に変化をつけられます。"]
    }
  ],

  "sentence_building_support": {
    "beginner": [
      { "step": 1, "question_ja": "誰がいますか？", "template": "There is a ______.", "example": "There is a woman." },
      { "step": 2, "question_ja": "どこにいますか？", "template": "She is in / at / by ______.", "example": "She is in a cafe." },
      { "step": 3, "question_ja": "何をしていますか？", "template": "She is ______ing.", "example": "She is drinking coffee." },
      { "step": 4, "question_ja": "どんな様子ですか？", "template": "She looks ______.", "example": "She looks relaxed." },
      { "step": 5, "question_ja": "他に何がありますか？", "template": "There is / are ______ on / behind / beside ______.", "example": "There is a notebook on the table." }
    ],

    "intermediate": [
      { "template": "A young woman is ______ing while sitting ______.", "example": "A young woman is drinking coffee while sitting by a large window." },
      { "template": "On the ______, there is / are ______.", "example": "On the wooden table, there is a notebook, a pen, and a vase of white flowers." },
      { "template": "The ______ makes the scene feel ______.", "example": "The warm sunlight makes the scene feel peaceful and inviting." },
      { "template": "In the background, we can see ______.", "example": "In the background, we can see a menu board, an espresso machine, and several shelves." }
    ],

    "advanced": [
      { "template": "Present participial phrase, main clause.", "example": "Holding a warm cup with both hands, the woman quietly enjoys a peaceful moment by the window." },
      { "template": "Past participial phrase, main clause.", "example": "Surrounded by warm sunlight and cozy decorations, the woman appears completely relaxed." },
      { "template": "Main clause, while / as + subordinate clause.", "example": "The woman slowly sips her coffee as golden sunlight streams through the large window." },
      { "template": "Not only A but also B.", "example": "The natural light not only brightens the cafe but also creates a peaceful and welcoming atmosphere." }
    ]
  },

  "sample_answers": {
    "beginner": [
      "A woman is drinking coffee in a cafe.",
      "She is sitting by the window.",
      "There is a notebook and a vase of flowers on the table.",
      "The woman looks calm and happy."
    ],

    "intermediate": [
      "A young woman is sitting by a large window and quietly enjoying a cup of coffee.",
      "She is wearing a cream-colored sweater and holding a white cup with both hands.",
      "On the wooden table, there are a notebook, a pen, a vase of small white flowers, and a saucer.",
      "Warm sunlight fills the cozy cafe and creates a peaceful atmosphere."
    ],

    "advanced": [
      "Seated comfortably beside a sunlit window, a young woman quietly sips her coffee while enjoying a peaceful moment alone.",
      "Dressed in a cozy cream-colored sweater, she gently cradles a white ceramic cup in both hands as golden sunlight pours into the cafe.",
      "Surrounded by delicate flowers, warm wooden furniture, and soft natural light, the woman appears completely relaxed, as though she has temporarily escaped the busyness of everyday life."
    ]
  },

  "full_description_support": {
    "beginner_model": "A woman is sitting in a cafe. She is drinking coffee. She is wearing a cream-colored sweater. There is a notebook and a vase of white flowers on the table. She looks calm and relaxed.",
    "intermediate_model": "A young woman is sitting by a large window in a cozy cafe. She is quietly enjoying a cup of coffee and holding the white cup with both hands. On the wooden table, there are a notebook, a pen, a vase of delicate white flowers, and a saucer. Warm sunlight comes through the window and makes the cafe feel peaceful and comfortable.",
    "advanced_model": "Seated comfortably beside a large sunlit window, a young woman quietly savors a cup of coffee in a warm and inviting cafe. Dressed in a cozy cream-colored knit sweater, she gently cradles the white ceramic cup in both hands, appearing calm and completely at ease. A notebook, a pen, a vase of delicate white flowers, and a saucer are neatly arranged on the polished wooden table, while a chalkboard menu, an espresso machine, hanging lights, and green plants complete the charming background. Streaming through the window, the golden sunlight fills the cafe with warmth and creates a serene atmosphere."
  },

  "cefr_model_answers": {
    "A1": [
      {
        "en": "A woman is in a cafe. She is drinking coffee. She is sitting by the window.",
        "ja": "女性がカフェにいます。彼女はコーヒーを飲んでいます。窓のそばに座っています。",
        "focus": "be動詞と現在進行形の基本。短い文で確実に事実を伝える。"
      },
      {
        "en": "There is a woman. She has a cup of coffee. The cafe is bright.",
        "ja": "女性がいます。彼女はコーヒーを持っています。カフェは明るいです。",
        "focus": "There is 構文と、has を使ったシンプルな所有の表現。"
      }
    ],
    "A2": [
      {
        "en": "A young woman is sitting by the window and drinking a cup of coffee.",
        "ja": "若い女性が窓辺に座り、コーヒーを飲んでいます。",
        "focus": "and を使って2つの動作（sitting, drinking）をスムーズに繋ぐ。"
      },
      {
        "en": "The woman looks happy because she is enjoying hot coffee in a cozy cafe.",
        "ja": "居心地の良いカフェで温かいコーヒーを楽しんでいるので、女性は幸せそうに見えます。",
        "focus": "look + 形容詞（〜に見える）と、because を使った理由づけ。"
      }
    ],
    "B1": [
      {
        "en": "A young female customer is sitting by a large window, holding a white cup with both hands.",
        "ja": "若い女性客が大きな窓辺に座り、両手で白いカップを持っています。",
        "focus": "holding... という分詞を使い、同時に行われている動作を追加して描写する。"
      },
      {
        "en": "Sunlight is coming through the window while the woman slowly sips her coffee.",
        "ja": "女性がゆっくりとコーヒーを味わっている間、窓からは日光が差し込んでいます。",
        "focus": "while（〜している間に）を使い、背景の様子と人物の動作を結びつける。"
      }
    ],
    "B2": [
      {
        "en": "Seated comfortably beside a sunlit window, a young woman quietly savors her coffee, appearing completely relaxed.",
        "ja": "陽の当たる窓辺に心地よく腰掛け、若い女性は静かにコーヒーを堪能し、完全にリラックスしているように見えます。",
        "focus": "Seated... で始める過去分詞句と appearing... を用いて、複数の情報を立体的に表す。"
      },
      {
        "en": "The warm natural light bathes the cozy cafe interior, perfectly complementing the peaceful solitude of the coffee lover.",
        "ja": "暖かな自然光が居心地の良いカフェの店内を包み込み、コーヒーを愛する彼女の穏やかな孤独感と美しく調和しています。",
        "focus": "人物ではなく light を主語にし、complement や solitude などの高度な語彙で雰囲気を表現する。"
      }
    ]
  }
};

// ブラウザでは window.cafeData / globalThis.cafeData として利用できます。
if (typeof globalThis !== "undefined") {
  globalThis.cafeData = cafeData;
}

// Node.js / CommonJSからの読み込みにも対応します。
if (typeof module !== "undefined" && module.exports) {
  module.exports = cafeData;
}