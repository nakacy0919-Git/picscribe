"use strict";

const scene013Data = {
  "id": "scene_013",
  "image_id": "013.webp",
  "overall_description_ja": "明るい自然光が差し込む教室で、4人の高校生が大きな白いテーブルを囲み、「持続可能な都市」をテーマにしたグループプロジェクトについて話し合っている。中央左の白いセーターの女子生徒が両手を使って考えを説明し、灰色のパーカーの男子生徒、紺色のスウェットの男子生徒、青いストライプシャツの女子生徒が笑顔で耳を傾けている。テーブル中央には開いたノートパソコンがあり、周囲に調査用紙、手書きメモ、ノート、筆箱、カラーペン、付箋、本が広げられている。背後のホワイトボードにはProject Plan、Sustainable Citiesのマインドマップ、To Doリストがあり、交通、緑地、リサイクル、地域社会、エネルギー、調査、インタビュー、データ分析、スライド作成などが示されている。環境ポスターと自然光が、協力的で前向き、知的で活気のある学習場面を作っている。",
  "overall_description_en": "In a bright classroom filled with natural daylight, four high school students are sitting around a large white table and discussing a group project about sustainable cities. The female student in the cream sweater is explaining an idea with both hands, while the male student in the gray hoodie, the male student in the navy sweatshirt, and the female student in the blue striped shirt listen with friendly smiles. An open laptop stands at the center of the table, surrounded by research sheets, handwritten notes, notebooks, a pencil case, colored pens, sticky notes, and books. The whiteboard behind them displays a Project Plan, a Sustainable Cities mind map, and a To Do checklist covering transportation, green spaces, recycling, community, energy, surveys, interviews, data analysis, and slides. Environmental posters and natural light create a collaborative, positive, intellectual, and energetic learning atmosphere.",
  "overall_mood": [
    "collaborative",
    "engaged",
    "bright",
    "academic",
    "friendly",
    "productive",
    "creative",
    "positive",
    "focused",
    "communicative",
    "organized",
    "supportive",
    "thoughtful",
    "energetic",
    "inspiring",
    "student-centered",
    "environmentally conscious",
    "sunlit"
  ],
  "mission_guides": {
    "gist": "4人の生徒が何について、どのように話し合っているかを書こう。",
    "setting": "教室、ホワイトボード、テーブル、ノートパソコン、教材の位置を説明しよう。",
    "details": "服装、表情、身振り、プロジェクトのテーマ、ホワイトボードの文字を加えよう。",
    "complete": "協力、環境問題、自然光、学習への集中といった雰囲気まで含めよう。"
  },
  "focus_hints": {
    "gist": [
      {
        "en": "four students discussing a group project",
        "ja": "グループプロジェクトについて話し合う4人の生徒"
      },
      {
        "en": "a girl explaining her idea with both hands",
        "ja": "両手で考えを説明する女子生徒"
      },
      {
        "en": "three classmates listening and smiling",
        "ja": "笑顔で話を聞く3人のクラスメート"
      },
      {
        "en": "planning a project about sustainable cities",
        "ja": "持続可能な都市についてのプロジェクトを計画している"
      }
    ],
    "setting": [
      {
        "en": "around a large white table in a classroom",
        "ja": "教室の大きな白いテーブルを囲んで"
      },
      {
        "en": "an open laptop and worksheets on the table",
        "ja": "テーブル上の開いたパソコンと資料"
      },
      {
        "en": "a project plan and mind map on the whiteboard",
        "ja": "ホワイトボード上の計画とマインドマップ"
      },
      {
        "en": "environmental posters beside a sunlit window",
        "ja": "明るい窓のそばの環境ポスター"
      }
    ],
    "mood": [
      {
        "en": "a cooperative and productive atmosphere",
        "ja": "協力的で生産的な雰囲気"
      },
      {
        "en": "friendly smiles and active eye contact",
        "ja": "親しみのある笑顔と積極的な視線"
      },
      {
        "en": "bright natural light filling the classroom",
        "ja": "教室を満たす明るい自然光"
      },
      {
        "en": "an inspiring discussion about the future",
        "ja": "未来についての刺激的な話し合い"
      }
    ]
  },
  "hint_language_support": {
    "supported_languages": [
      "en",
      "ja"
    ],
    "default_language": "en",
    "fallback_field": "text",
    "text_fields": {
      "en": "text_en",
      "ja": "text_ja"
    },
    "level_fields": {
      "en": "level",
      "ja": "level_ja"
    },
    "type_fields": {
      "en": "type",
      "ja": "type_ja"
    }
  },
  "core_svo_targets": [
    {
      "step": 1,
      "slot": "subject",
      "name": "主語 (Subject)",
      "targets": [
        "four students",
        "four high school students",
        "a group of students",
        "classmates",
        "team members",
        "the students",
        "they",
        "the project team"
      ],
      "hint_msg": "まずはfour studentsやa group of studentsなど、誰がいるかを書きましょう。",
      "success_msg": "Good! 次は生徒たちの動作を書きましょう。"
    },
    {
      "step": 2,
      "slot": "verb",
      "name": "動作 (Action)",
      "targets": [
        "are discussing",
        "are talking",
        "are planning",
        "are collaborating",
        "are sharing ideas",
        "are working",
        "are studying",
        "are preparing"
      ],
      "hint_msg": "複数主語なのでare + 動詞ingを使いましょう。",
      "success_msg": "Great! 次は話題や場所を加えましょう。"
    },
    {
      "step": 3,
      "slot": "object_or_place",
      "name": "目的語・場所",
      "targets": [
        "a project",
        "sustainable cities",
        "the environment",
        "a classroom",
        "a table",
        "a laptop",
        "research",
        "presentation",
        "whiteboard"
      ],
      "hint_msg": "a project about sustainable cities / in a classroomなどを加えましょう。",
      "success_msg": "Excellent! 表情、身振り、資料、雰囲気も詳しく描写しましょう。"
    }
  ],
  "suggested_topics": [
    "students discussing a group project",
    "planning a sustainable city",
    "collaborative learning",
    "sharing ideas in class",
    "research and presentation planning",
    "environmental education",
    "using a laptop during group work",
    "active listening and communication",
    "project-based learning",
    "teamwork in a classroom",
    "sustainable transportation and green spaces",
    "recycling, energy, and community",
    "preparing survey and interview questions",
    "organizing information on a whiteboard"
  ],
  "scene_structure": {
    "foreground": [
      "white table",
      "research worksheets",
      "handwritten notes",
      "pencil case",
      "colored pens",
      "sticky notes",
      "books and notebooks"
    ],
    "midground": [
      "four students",
      "open laptop",
      "hand gestures",
      "notebooks"
    ],
    "background": [
      "large whiteboard",
      "Project Plan",
      "Sustainable Cities mind map",
      "To Do checklist",
      "environmental posters",
      "sunlit window"
    ]
  },
  "elements": [
    {
      "id": "element_001",
      "label": "group of four students",
      "label_ja": "4人の生徒のグループ",
      "category": "people",
      "importance": "primary",
      "description": "Four high school students sit around one white classroom table, face one another, and work as a project team.",
      "bounding_box_conceptual": [
        29,
        0,
        68,
        100
      ],
      "color": [
        "gray",
        "cream",
        "navy",
        "light blue"
      ],
      "attributes": [
        "young",
        "cooperative",
        "engaged",
        "friendly",
        "attentive",
        "communicative"
      ],
      "action": [
        "discussing",
        "listening",
        "sharing ideas",
        "planning",
        "making eye contact"
      ],
      "synonyms_and_related_words": [
        "four students",
        "four high school students"
      ],
      "accepted_words": [
        "four students",
        "four high school students",
        "a group of students",
        "classmates"
      ],
      "common_typos": [
        "four studants",
        "high shcool students",
        "class mates"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "students",
            "ja": "生徒たち"
          }
        ],
        "A2": [
          {
            "en": "classmates",
            "ja": "クラスメート"
          }
        ],
        "B1": [
          {
            "en": "project team",
            "ja": "プロジェクトチーム"
          }
        ],
        "B2": [
          {
            "en": "collaborative learning group",
            "ja": "協働学習グループ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a circle of young minds working toward one goal",
          "ja": "一つの目標へ向かう若い知性の輪"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "four students, classmates, team members",
          "text_en": "four students, classmates, team members",
          "text_ja": "4人の生徒、クラスメート、チームメンバー"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a group of classmates working toward the same goal",
          "text_en": "a group of classmates working toward the same goal",
          "text_ja": "同じ目標へ向かって取り組むクラスメートのグループ"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The four students appear to be...",
          "text_en": "The four students appear to be...",
          "text_ja": "4人の生徒は……しているようです。"
        }
      ]
    },
    {
      "id": "element_002",
      "label": "male student in a gray hoodie",
      "label_ja": "灰色のパーカーを着た男子生徒",
      "category": "person",
      "importance": "primary",
      "description": "A male student with short black hair sits on the left, wears a light gray hoodie, and rests one hand near his chin while listening.",
      "bounding_box_conceptual": [
        29,
        0,
        62,
        28
      ],
      "color": [
        "light gray",
        "black",
        "white"
      ],
      "attributes": [
        "young",
        "thoughtful",
        "attentive",
        "quiet",
        "interested"
      ],
      "action": [
        "listening",
        "watching the speaker",
        "thinking",
        "sitting"
      ],
      "synonyms_and_related_words": [
        "male student",
        "boy"
      ],
      "accepted_words": [
        "male student",
        "boy",
        "young man",
        "student in a gray hoodie"
      ],
      "common_typos": [
        "mail student",
        "gray hoody",
        "grey hoddie"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "boy",
            "ja": "男の子"
          }
        ],
        "A2": [
          {
            "en": "male student",
            "ja": "男子生徒"
          }
        ],
        "B1": [
          {
            "en": "attentive listener",
            "ja": "注意深い聞き手"
          }
        ],
        "B2": [
          {
            "en": "reflective team member",
            "ja": "思慮深いチームメンバー"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a quiet thinker at the edge of the conversation",
          "ja": "会話の端にいる静かな思考者"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "boy, gray hoodie, listener, thoughtful",
          "text_en": "boy, gray hoodie, listener, thoughtful",
          "text_ja": "男の子、灰色のパーカー、聞き手、考え深い"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "rest one hand near his chin while listening",
          "text_en": "rest one hand near his chin while listening",
          "text_ja": "話を聞きながら片手をあごの近くに置く"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "On the left side of the table, a boy...",
          "text_en": "On the left side of the table, a boy...",
          "text_ja": "テーブルの左側では男子生徒が……"
        }
      ]
    },
    {
      "id": "element_003",
      "label": "female student explaining an idea",
      "label_ja": "考えを説明する女子生徒",
      "category": "person",
      "importance": "primary",
      "description": "A female student with long dark hair wears a cream knit sweater, smiles, and gestures with both hands while speaking.",
      "bounding_box_conceptual": [
        32,
        24,
        49,
        30
      ],
      "color": [
        "cream",
        "black",
        "beige"
      ],
      "attributes": [
        "expressive",
        "confident",
        "friendly",
        "enthusiastic",
        "engaged"
      ],
      "action": [
        "speaking",
        "explaining",
        "gesturing",
        "sharing an idea",
        "smiling"
      ],
      "synonyms_and_related_words": [
        "female student",
        "girl"
      ],
      "accepted_words": [
        "female student",
        "girl",
        "young woman",
        "speaker"
      ],
      "common_typos": [
        "femail student",
        "speeker",
        "presentor"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "girl",
            "ja": "女の子"
          }
        ],
        "A2": [
          {
            "en": "female student",
            "ja": "女子生徒"
          }
        ],
        "B1": [
          {
            "en": "confident speaker",
            "ja": "自信のある話し手"
          }
        ],
        "B2": [
          {
            "en": "articulate student presenter",
            "ja": "明確に話す生徒発表者"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "hands drawing an invisible plan in the air",
          "ja": "空中に見えない計画を描く両手"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "girl, explain, idea, hand gestures",
          "text_en": "girl, explain, idea, hand gestures",
          "text_ja": "女子生徒、説明する、考え、身振り"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "gesture with both hands while speaking",
          "text_en": "gesture with both hands while speaking",
          "text_ja": "話しながら両手で身振りをする"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The student in the cream sweater is...",
          "text_en": "The student in the cream sweater is...",
          "text_ja": "クリーム色のセーターの生徒は……"
        }
      ]
    },
    {
      "id": "element_004",
      "label": "male student in a navy sweatshirt",
      "label_ja": "紺色のスウェットを着た男子生徒",
      "category": "person",
      "importance": "primary",
      "description": "A smiling male student in a navy sweatshirt sits behind the laptop, leans forward, and looks directly at the speaker.",
      "bounding_box_conceptual": [
        32,
        50,
        44,
        29
      ],
      "color": [
        "navy",
        "black",
        "white"
      ],
      "attributes": [
        "smiling",
        "interested",
        "supportive",
        "relaxed",
        "attentive"
      ],
      "action": [
        "listening",
        "smiling",
        "leaning forward",
        "looking at the speaker"
      ],
      "synonyms_and_related_words": [
        "male student",
        "boy"
      ],
      "accepted_words": [
        "male student",
        "boy",
        "young man",
        "student in navy"
      ],
      "common_typos": [
        "mail student",
        "navy swetshirt",
        "dark sweter"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "boy",
            "ja": "男の子"
          }
        ],
        "A2": [
          {
            "en": "male student",
            "ja": "男子生徒"
          }
        ],
        "B1": [
          {
            "en": "supportive teammate",
            "ja": "協力的なチームメート"
          }
        ],
        "B2": [
          {
            "en": "receptive participant",
            "ja": "受容的な参加者"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a smile that keeps the discussion welcoming",
          "ja": "話し合いを親しみやすくする笑顔"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "boy, navy sweatshirt, smile, listen",
          "text_en": "boy, navy sweatshirt, smile, listen",
          "text_ja": "男の子、紺色のスウェット、笑顔、聞く"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "lean forward and make eye contact with the speaker",
          "text_en": "lean forward and make eye contact with the speaker",
          "text_ja": "前へ身を傾け、話し手と視線を合わせる"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Behind the laptop, the male student...",
          "text_en": "Behind the laptop, the male student...",
          "text_ja": "ノートパソコンの後ろで男子生徒は……"
        }
      ]
    },
    {
      "id": "element_005",
      "label": "female student in a blue striped shirt",
      "label_ja": "青いストライプシャツを着た女子生徒",
      "category": "person",
      "importance": "primary",
      "description": "A female student with brown hair in a low ponytail sits on the right, holds a black pen near her chin, and smiles at the speaker.",
      "bounding_box_conceptual": [
        33,
        75,
        64,
        25
      ],
      "color": [
        "light blue",
        "white",
        "brown",
        "black"
      ],
      "attributes": [
        "attentive",
        "friendly",
        "prepared",
        "curious",
        "smiling"
      ],
      "action": [
        "holding a pen",
        "listening",
        "watching the speaker",
        "preparing to take notes"
      ],
      "synonyms_and_related_words": [
        "female student",
        "girl"
      ],
      "accepted_words": [
        "female student",
        "girl",
        "young woman",
        "student in a striped shirt"
      ],
      "common_typos": [
        "femail student",
        "striped shurt",
        "girl in blew"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "girl",
            "ja": "女の子"
          }
        ],
        "A2": [
          {
            "en": "female student",
            "ja": "女子生徒"
          }
        ],
        "B1": [
          {
            "en": "prepared note taker",
            "ja": "準備のできた記録係"
          }
        ],
        "B2": [
          {
            "en": "participant ready to document decisions",
            "ja": "決定を記録する準備ができた参加者"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a pen waiting beside a thoughtful smile",
          "ja": "考え深い笑顔のそばで待つペン"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "girl, striped shirt, pen, note taker",
          "text_en": "girl, striped shirt, pen, note taker",
          "text_ja": "女子生徒、ストライプシャツ、ペン、記録係"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "listen with a pen near her chin",
          "text_en": "listen with a pen near her chin",
          "text_ja": "ペンをあごの近くに持って聞く"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "On the far right, the student appears ready to...",
          "text_en": "On the far right, the student appears ready to...",
          "text_ja": "一番右の生徒は……する準備ができているようです。"
        }
      ]
    },
    {
      "id": "element_006",
      "label": "open laptop",
      "label_ja": "開いたノートパソコン",
      "category": "technology",
      "importance": "primary",
      "description": "A dark gray laptop is open at the center of the table and appears to support research, planning, and presentation work.",
      "bounding_box_conceptual": [
        60,
        42,
        24,
        28
      ],
      "color": [
        "dark gray",
        "black",
        "silver"
      ],
      "attributes": [
        "open",
        "portable",
        "digital",
        "central",
        "shared"
      ],
      "action": [
        "displaying information",
        "supporting research",
        "being used by the group"
      ],
      "synonyms_and_related_words": [
        "laptop",
        "computer"
      ],
      "accepted_words": [
        "laptop",
        "computer",
        "notebook computer",
        "portable computer"
      ],
      "common_typos": [
        "labtop",
        "lap top",
        "computor"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "computer",
            "ja": "コンピューター"
          }
        ],
        "A2": [
          {
            "en": "open laptop",
            "ja": "開いたノートパソコン"
          }
        ],
        "B1": [
          {
            "en": "digital research tool",
            "ja": "デジタル調査道具"
          }
        ],
        "B2": [
          {
            "en": "central digital workspace",
            "ja": "中心的なデジタル作業空間"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a digital window at the center of the conversation",
          "ja": "会話の中心にあるデジタルの窓"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "laptop, computer, screen, digital",
          "text_en": "laptop, computer, screen, digital",
          "text_ja": "ノートパソコン、コンピューター、画面、デジタル"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a shared laptop at the center of the table",
          "text_en": "a shared laptop at the center of the table",
          "text_ja": "テーブル中央の共有ノートパソコン"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The laptop may be used to...",
          "text_en": "The laptop may be used to...",
          "text_ja": "ノートパソコンは……するために使われているのかもしれません。"
        }
      ]
    },
    {
      "id": "element_007",
      "label": "research worksheets",
      "label_ja": "調査用ワークシート",
      "category": "object",
      "importance": "primary",
      "description": "Printed worksheets and handwritten planning sheets with charts, diagrams, colored markings, and notes are spread across the table.",
      "bounding_box_conceptual": [
        66,
        0,
        30,
        83
      ],
      "color": [
        "white",
        "blue",
        "orange",
        "black"
      ],
      "attributes": [
        "printed",
        "handwritten",
        "organized",
        "detailed",
        "annotated"
      ],
      "action": [
        "lying on the table",
        "displaying research",
        "organizing information"
      ],
      "synonyms_and_related_words": [
        "worksheets",
        "research sheets"
      ],
      "accepted_words": [
        "worksheets",
        "research sheets",
        "papers",
        "documents"
      ],
      "common_typos": [
        "work sheets",
        "reserch sheets",
        "documants"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "papers",
            "ja": "紙・資料"
          }
        ],
        "A2": [
          {
            "en": "research sheets",
            "ja": "調査用紙"
          }
        ],
        "B1": [
          {
            "en": "planning documents",
            "ja": "計画資料"
          }
        ],
        "B2": [
          {
            "en": "organized research findings",
            "ja": "整理された調査結果"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "paper trails showing how ideas become a project",
          "ja": "考えがプロジェクトへ変わる紙の道"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "worksheet, paper, notes, document",
          "text_en": "worksheet, paper, notes, document",
          "text_ja": "ワークシート、紙、メモ、資料"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "research sheets covered with notes and diagrams",
          "text_en": "research sheets covered with notes and diagrams",
          "text_ja": "メモや図が書かれた調査用紙"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Spread across the table, the worksheets...",
          "text_en": "Spread across the table, the worksheets...",
          "text_ja": "テーブルに広げられたワークシートは……"
        }
      ]
    },
    {
      "id": "element_008",
      "label": "notebooks and handwritten notes",
      "label_ja": "ノートと手書きのメモ",
      "category": "object",
      "importance": "primary",
      "description": "Open notebooks and loose handwritten notes in front of the students appear to contain ideas, questions, schedules, and summaries.",
      "bounding_box_conceptual": [
        59,
        34,
        32,
        61
      ],
      "color": [
        "white",
        "cream",
        "black",
        "blue"
      ],
      "attributes": [
        "open",
        "handwritten",
        "lined",
        "personal",
        "organized"
      ],
      "action": [
        "recording ideas",
        "lying open",
        "supporting planning"
      ],
      "synonyms_and_related_words": [
        "notebook",
        "notebooks"
      ],
      "accepted_words": [
        "notebook",
        "notebooks",
        "notes",
        "handwritten notes"
      ],
      "common_typos": [
        "note book",
        "notbooks",
        "hand writen notes"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "notebook",
            "ja": "ノート"
          }
        ],
        "A2": [
          {
            "en": "open notebook",
            "ja": "開いたノート"
          }
        ],
        "B1": [
          {
            "en": "meeting notes",
            "ja": "話し合いの記録"
          }
        ],
        "B2": [
          {
            "en": "written record of decisions",
            "ja": "決定の記録"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "private thoughts becoming a shared plan",
          "ja": "個人の考えが共有計画になる"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "notebook, notes, write, record",
          "text_en": "notebook, notes, write, record",
          "text_ja": "ノート、メモ、書く、記録する"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "handwritten notes from the project discussion",
          "text_en": "handwritten notes from the project discussion",
          "text_ja": "プロジェクトの話し合いで書かれた手書きメモ"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The open notebooks suggest that...",
          "text_en": "The open notebooks suggest that...",
          "text_ja": "開いたノートから……と分かります。"
        }
      ]
    },
    {
      "id": "element_009",
      "label": "colored pens and pencil holder",
      "label_ja": "カラーペンとペン立て",
      "category": "object",
      "importance": "secondary",
      "description": "A mesh pencil holder filled with yellow, pink, blue, and orange pens stands near the front-center of the table.",
      "bounding_box_conceptual": [
        78,
        48,
        20,
        19
      ],
      "color": [
        "yellow",
        "pink",
        "blue",
        "orange",
        "black"
      ],
      "attributes": [
        "colorful",
        "organized",
        "practical",
        "accessible",
        "creative"
      ],
      "action": [
        "holding pens",
        "supporting note-taking",
        "adding color"
      ],
      "synonyms_and_related_words": [
        "pen holder",
        "pencil holder"
      ],
      "accepted_words": [
        "pen holder",
        "pencil holder",
        "colored pens",
        "markers"
      ],
      "common_typos": [
        "pen houlder",
        "pencel holder",
        "colord pens"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "pens",
            "ja": "ペン"
          }
        ],
        "A2": [
          {
            "en": "colored pens",
            "ja": "カラーペン"
          }
        ],
        "B1": [
          {
            "en": "stationery",
            "ja": "文房具"
          }
        ],
        "B2": [
          {
            "en": "visual organization tools",
            "ja": "視覚的整理道具"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a bouquet of colors growing from the table",
          "ja": "テーブルから伸びる色の花束"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "pen, marker, pencil holder, color",
          "text_en": "pen, marker, pencil holder, color",
          "text_ja": "ペン、マーカー、ペン立て、色"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a mesh holder filled with markers and highlighters",
          "text_en": "a mesh holder filled with markers and highlighters",
          "text_ja": "マーカーと蛍光ペンが入ったメッシュのペン立て"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The colored stationery can help the group...",
          "text_en": "The colored stationery can help the group...",
          "text_ja": "カラフルな文房具はグループが……するのに役立ちます。"
        }
      ]
    },
    {
      "id": "element_010",
      "label": "pencil case and sticky notes",
      "label_ja": "筆箱と付箋",
      "category": "object",
      "importance": "secondary",
      "description": "A light-colored pencil case and a yellow sticky-note pad lie near the front edge of the table.",
      "bounding_box_conceptual": [
        86,
        24,
        13,
        32
      ],
      "color": [
        "beige",
        "cream",
        "yellow",
        "blue"
      ],
      "attributes": [
        "portable",
        "practical",
        "small",
        "personal",
        "organized"
      ],
      "action": [
        "lying on the table",
        "holding stationery",
        "supporting reminders"
      ],
      "synonyms_and_related_words": [
        "pencil case",
        "pen case"
      ],
      "accepted_words": [
        "pencil case",
        "pen case",
        "stationery case",
        "sticky notes"
      ],
      "common_typos": [
        "pencel case",
        "pen casse",
        "stationary case"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "pencil case",
            "ja": "筆箱"
          }
        ],
        "A2": [
          {
            "en": "memo pad",
            "ja": "メモ帳"
          }
        ],
        "B1": [
          {
            "en": "portable stationery case",
            "ja": "携帯用文房具ケース"
          }
        ],
        "B2": [
          {
            "en": "compact organizational tools",
            "ja": "小型整理道具"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "yellow reminders waiting for important ideas",
          "ja": "重要な考えを待つ黄色いリマインダー"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "pencil case, sticky note, memo pad",
          "text_en": "pencil case, sticky note, memo pad",
          "text_ja": "筆箱、付箋、メモ帳"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "small tools for recording short tasks and questions",
          "text_en": "small tools for recording short tasks and questions",
          "text_ja": "短い課題や質問を記録する小さな道具"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The sticky notes may be used to...",
          "text_en": "The sticky notes may be used to...",
          "text_ja": "付箋は……するために使われるのかもしれません。"
        }
      ]
    },
    {
      "id": "element_011",
      "label": "books and stacked notebooks",
      "label_ja": "本と積み重ねたノート",
      "category": "object",
      "importance": "secondary",
      "description": "Several books and notebooks are stacked on the front-right side of the table, with loose cream papers resting on top.",
      "bounding_box_conceptual": [
        80,
        60,
        20,
        27
      ],
      "color": [
        "cream",
        "pink",
        "blue",
        "white"
      ],
      "attributes": [
        "stacked",
        "layered",
        "academic",
        "organized",
        "used"
      ],
      "action": [
        "resting on the table",
        "supporting research",
        "forming a stack"
      ],
      "synonyms_and_related_words": [
        "books",
        "notebooks"
      ],
      "accepted_words": [
        "books",
        "notebooks",
        "stack of books",
        "textbooks"
      ],
      "common_typos": [
        "bookes",
        "not books",
        "stack off books"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "books",
            "ja": "本"
          }
        ],
        "A2": [
          {
            "en": "textbooks",
            "ja": "教科書"
          }
        ],
        "B1": [
          {
            "en": "reference books",
            "ja": "参考図書"
          }
        ],
        "B2": [
          {
            "en": "printed sources supporting inquiry",
            "ja": "探究を支える紙資料"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a staircase built from sources and questions",
          "ja": "資料と問いでできた階段"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "book, notebook, textbook, reference",
          "text_en": "book, notebook, textbook, reference",
          "text_ja": "本、ノート、教科書、参考資料"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "reference books stacked beside the project papers",
          "text_en": "reference books stacked beside the project papers",
          "text_ja": "プロジェクト資料のそばに積まれた参考書"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The books may provide information about...",
          "text_en": "The books may provide information about...",
          "text_ja": "本は……についての情報を提供するのかもしれません。"
        }
      ]
    },
    {
      "id": "element_012",
      "label": "large white classroom table",
      "label_ja": "大きな白い教室用テーブル",
      "category": "furniture",
      "importance": "primary",
      "description": "A large rectangular white table fills the lower half of the scene and provides a shared surface for all project materials.",
      "bounding_box_conceptual": [
        57,
        0,
        43,
        100
      ],
      "color": [
        "white",
        "cream",
        "light gray"
      ],
      "attributes": [
        "large",
        "rectangular",
        "shared",
        "central",
        "practical"
      ],
      "action": [
        "supporting materials",
        "bringing the group together",
        "serving as a workspace"
      ],
      "synonyms_and_related_words": [
        "table",
        "classroom table"
      ],
      "accepted_words": [
        "table",
        "classroom table",
        "white table",
        "large table"
      ],
      "common_typos": [
        "tabel",
        "class room table",
        "whight table"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "table",
            "ja": "テーブル"
          }
        ],
        "A2": [
          {
            "en": "classroom table",
            "ja": "教室用テーブル"
          }
        ],
        "B1": [
          {
            "en": "shared workspace",
            "ja": "共有作業空間"
          }
        ],
        "B2": [
          {
            "en": "central collaborative surface",
            "ja": "中心的な協働作業面"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a white island covered with developing ideas",
          "ja": "発展途中の考えに覆われた白い島"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "table, classroom, workspace, shared",
          "text_en": "table, classroom, workspace, shared",
          "text_ja": "テーブル、教室、作業空間、共有"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a shared work table covered with project materials",
          "text_en": "a shared work table covered with project materials",
          "text_ja": "プロジェクト資料で覆われた共有作業テーブル"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The table brings the students and their materials...",
          "text_en": "The table brings the students and their materials...",
          "text_ja": "テーブルは生徒と資料を……"
        }
      ]
    },
    {
      "id": "element_013",
      "label": "large whiteboard",
      "label_ja": "大きなホワイトボード",
      "category": "setting",
      "importance": "primary",
      "description": "A large whiteboard behind the students contains a project plan, a mind map, a task checklist, and a small city drawing.",
      "bounding_box_conceptual": [
        2,
        37,
        54,
        63
      ],
      "color": [
        "white",
        "blue",
        "black",
        "green"
      ],
      "attributes": [
        "large",
        "informative",
        "organized",
        "handwritten",
        "visual"
      ],
      "action": [
        "displaying information",
        "supporting planning",
        "organizing tasks"
      ],
      "synonyms_and_related_words": [
        "whiteboard",
        "board"
      ],
      "accepted_words": [
        "whiteboard",
        "board",
        "classroom board",
        "project board"
      ],
      "common_typos": [
        "white bord",
        "whiteboardd",
        "classroom bord"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "board",
            "ja": "ボード"
          }
        ],
        "A2": [
          {
            "en": "classroom board",
            "ja": "教室のボード"
          }
        ],
        "B1": [
          {
            "en": "planning board",
            "ja": "計画ボード"
          }
        ],
        "B2": [
          {
            "en": "shared visual workspace",
            "ja": "共有視覚作業空間"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a wall where the project becomes visible",
          "ja": "プロジェクトが見える形になる壁"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "whiteboard, plan, list, diagram",
          "text_en": "whiteboard, plan, list, diagram",
          "text_ja": "ホワイトボード、計画、リスト、図"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a whiteboard filled with plans, tasks, and a mind map",
          "text_en": "a whiteboard filled with plans, tasks, and a mind map",
          "text_ja": "計画、課題、マインドマップで埋められたホワイトボード"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Behind the group, the whiteboard displays...",
          "text_en": "Behind the group, the whiteboard displays...",
          "text_ja": "グループの後ろでホワイトボードは……を示しています。"
        }
      ]
    },
    {
      "id": "element_014",
      "label": "sustainable cities mind map",
      "label_ja": "持続可能な都市のマインドマップ",
      "category": "information",
      "importance": "primary",
      "description": "A cloud-shaped mind map places Sustainable Cities at the center and links it to transportation, green spaces, recycling, community, and energy.",
      "bounding_box_conceptual": [
        13,
        55,
        26,
        29
      ],
      "color": [
        "blue",
        "green",
        "black",
        "white"
      ],
      "attributes": [
        "central",
        "conceptual",
        "connected",
        "environmental",
        "visual"
      ],
      "action": [
        "connecting ideas",
        "showing categories",
        "defining the theme"
      ],
      "synonyms_and_related_words": [
        "mind map",
        "concept map"
      ],
      "accepted_words": [
        "mind map",
        "concept map",
        "idea map",
        "sustainable cities diagram"
      ],
      "common_typos": [
        "mindmap",
        "consept map",
        "idear map"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "theme",
            "ja": "テーマ"
          }
        ],
        "A2": [
          {
            "en": "mind map",
            "ja": "マインドマップ"
          }
        ],
        "B1": [
          {
            "en": "concept map",
            "ja": "概念図"
          }
        ],
        "B2": [
          {
            "en": "framework for urban sustainability",
            "ja": "都市の持続可能性の枠組み"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a cloud of ideas imagining a better city",
          "ja": "より良い都市を想像する考えの雲"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "city, sustainable, energy, recycling",
          "text_en": "city, sustainable, energy, recycling",
          "text_ja": "都市、持続可能な、エネルギー、リサイクル"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "a mind map connecting transportation, green spaces, and energy",
          "text_en": "a mind map connecting transportation, green spaces, and energy",
          "text_ja": "交通、緑地、エネルギーをつなぐマインドマップ"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "At the center of the board, the mind map...",
          "text_en": "At the center of the board, the mind map...",
          "text_ja": "ボード中央でマインドマップは……"
        }
      ]
    },
    {
      "id": "element_015",
      "label": "project plan and to-do list",
      "label_ja": "プロジェクト計画とTo Doリスト",
      "category": "information",
      "importance": "primary",
      "description": "The board lists four project stages—Theme, Research, Ideas, and Presentation—and four remaining tasks—Survey, Interview, Data analysis, and Slides.",
      "bounding_box_conceptual": [
        5,
        39,
        39,
        61
      ],
      "color": [
        "blue",
        "black",
        "green",
        "orange"
      ],
      "attributes": [
        "structured",
        "sequential",
        "organized",
        "task-based",
        "clear"
      ],
      "action": [
        "listing steps",
        "organizing responsibilities",
        "guiding progress"
      ],
      "synonyms_and_related_words": [
        "project plan",
        "to-do list"
      ],
      "accepted_words": [
        "project plan",
        "to-do list",
        "task list",
        "checklist"
      ],
      "common_typos": [
        "project plane",
        "to do lisst",
        "task lest"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "plan",
            "ja": "計画"
          }
        ],
        "A2": [
          {
            "en": "project plan",
            "ja": "プロジェクト計画"
          }
        ],
        "B1": [
          {
            "en": "action plan",
            "ja": "行動計画"
          }
        ],
        "B2": [
          {
            "en": "sequenced project workflow",
            "ja": "順序化された作業工程"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "a road from theme to presentation",
          "ja": "テーマから発表へ続く道"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "plan, task, research, presentation",
          "text_en": "plan, task, research, presentation",
          "text_ja": "計画、課題、調査、発表"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "four project stages from theme to presentation",
          "text_en": "four project stages from theme to presentation",
          "text_ja": "テーマから発表までの4段階"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The checklist tells the students to...",
          "text_en": "The checklist tells the students to...",
          "text_ja": "チェックリストは生徒たちに……するよう示しています。"
        }
      ]
    },
    {
      "id": "element_016",
      "label": "environmental posters and sunlit window",
      "label_ja": "環境ポスターと日差しの入る窓",
      "category": "setting",
      "importance": "secondary",
      "description": "A tall window on the left lets daylight into the room, while two posters read Think Learn Grow and Be kind to our planet.",
      "bounding_box_conceptual": [
        0,
        0,
        46,
        39
      ],
      "color": [
        "white",
        "green",
        "blue",
        "cream"
      ],
      "attributes": [
        "sunlit",
        "bright",
        "environmental",
        "motivational",
        "positive"
      ],
      "action": [
        "letting in daylight",
        "displaying messages",
        "decorating the classroom"
      ],
      "synonyms_and_related_words": [
        "window",
        "sunlit window"
      ],
      "accepted_words": [
        "window",
        "sunlit window",
        "daylight",
        "natural light"
      ],
      "common_typos": [
        "windo",
        "sun ligth",
        "day ligth"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "window",
            "ja": "窓"
          }
        ],
        "A2": [
          {
            "en": "natural light",
            "ja": "自然光"
          }
        ],
        "B1": [
          {
            "en": "motivational display",
            "ja": "励ましの掲示"
          }
        ],
        "B2": [
          {
            "en": "sunlit ecological learning space",
            "ja": "日差しの入る環境学習空間"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "sunlight entering beside words about growth",
          "ja": "成長についての言葉のそばから入る日差し"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "window, light, poster, planet",
          "text_en": "window, light, poster, planet",
          "text_ja": "窓、光、ポスター、地球"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "environmental posters beside a bright classroom window",
          "text_en": "environmental posters beside a bright classroom window",
          "text_ja": "明るい教室の窓のそばの環境ポスター"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The posters reinforce the idea that...",
          "text_en": "The posters reinforce the idea that...",
          "text_ja": "ポスターは……という考えを強めています。"
        }
      ]
    }
  ],
  "text_elements": [
    {
      "id": "text_001",
      "location": "upper-left whiteboard",
      "content": "Project Plan",
      "description_ja": "プロジェクト計画の見出し",
      "accepted_words": [
        "Project Plan",
        "project plan",
        "planning"
      ],
      "common_typos": [
        "Project Plane",
        "Projec Plan"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "Project Plan, project plan, planning",
          "text_en": "Project Plan, project plan, planning",
          "text_ja": "プロジェクト計画の見出し"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "The board says: Project Plan.",
          "text_en": "The board says: Project Plan.",
          "text_ja": "ボードには「Project Plan」と書かれています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In the upper-left whiteboard, we can read...",
          "text_en": "In the upper-left whiteboard, we can read...",
          "text_ja": "プロジェクト計画の見出しとして……と読めます。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The text 'Project Plan' helps viewers understand the structure and environmental purpose of the project.",
          "text_en": "The text 'Project Plan' helps viewers understand the structure and environmental purpose of the project.",
          "text_ja": "「Project Plan」という文字はプロジェクトの構造と環境上の目的を理解する助けになります。"
        }
      ]
    },
    {
      "id": "text_002",
      "location": "below Project Plan",
      "content": "1. Theme / 2. Research / 3. Ideas / 4. Presentation",
      "description_ja": "プロジェクトの4段階",
      "accepted_words": [
        "Theme",
        "Research",
        "Ideas",
        "Presentation"
      ],
      "common_typos": [
        "Theam",
        "Reserch",
        "Idears"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "Theme, Research, Ideas",
          "text_en": "Theme, Research, Ideas",
          "text_ja": "プロジェクトの4段階"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "The board says: 1. Theme / 2. Research / 3. Ideas / 4. Presentation.",
          "text_en": "The board says: 1. Theme / 2. Research / 3. Ideas / 4. Presentation.",
          "text_ja": "ボードには「1. Theme / 2. Research / 3. Ideas / 4. Presentation」と書かれています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In the below Project Plan, we can read...",
          "text_en": "In the below Project Plan, we can read...",
          "text_ja": "プロジェクトの4段階として……と読めます。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The text '1. Theme / 2. Research / 3. Ideas / 4. Presentation' helps viewers understand the structure and environmental purpose of the project.",
          "text_en": "The text '1. Theme / 2. Research / 3. Ideas / 4. Presentation' helps viewers understand the structure and environmental purpose of the project.",
          "text_ja": "「1. Theme / 2. Research / 3. Ideas / 4. Presentation」という文字はプロジェクトの構造と環境上の目的を理解する助けになります。"
        }
      ]
    },
    {
      "id": "text_003",
      "location": "center mind map",
      "content": "Our Theme: Sustainable Cities",
      "description_ja": "プロジェクトの中心テーマ",
      "accepted_words": [
        "Our Theme",
        "Sustainable Cities",
        "sustainable city",
        "urban sustainability"
      ],
      "common_typos": [
        "Our Theam",
        "Sustainble Cities",
        "Sustainable Citys"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "Our Theme, Sustainable Cities, sustainable city",
          "text_en": "Our Theme, Sustainable Cities, sustainable city",
          "text_ja": "プロジェクトの中心テーマ"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "The board says: Our Theme: Sustainable Cities.",
          "text_en": "The board says: Our Theme: Sustainable Cities.",
          "text_ja": "ボードには「Our Theme: Sustainable Cities」と書かれています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In the center mind map, we can read...",
          "text_en": "In the center mind map, we can read...",
          "text_ja": "プロジェクトの中心テーマとして……と読めます。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The text 'Our Theme: Sustainable Cities' helps viewers understand the structure and environmental purpose of the project.",
          "text_en": "The text 'Our Theme: Sustainable Cities' helps viewers understand the structure and environmental purpose of the project.",
          "text_ja": "「Our Theme: Sustainable Cities」という文字はプロジェクトの構造と環境上の目的を理解する助けになります。"
        }
      ]
    },
    {
      "id": "text_004",
      "location": "upper mind-map branches",
      "content": "transportation / green spaces",
      "description_ja": "交通と緑地の項目",
      "accepted_words": [
        "transportation",
        "green spaces",
        "public transit",
        "parks"
      ],
      "common_typos": [
        "transportasion",
        "green spases"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "transportation, green spaces, public transit",
          "text_en": "transportation, green spaces, public transit",
          "text_ja": "交通と緑地の項目"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "The board says: transportation / green spaces.",
          "text_en": "The board says: transportation / green spaces.",
          "text_ja": "ボードには「transportation / green spaces」と書かれています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In the upper mind-map branches, we can read...",
          "text_en": "In the upper mind-map branches, we can read...",
          "text_ja": "交通と緑地の項目として……と読めます。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The text 'transportation / green spaces' helps viewers understand the structure and environmental purpose of the project.",
          "text_en": "The text 'transportation / green spaces' helps viewers understand the structure and environmental purpose of the project.",
          "text_ja": "「transportation / green spaces」という文字はプロジェクトの構造と環境上の目的を理解する助けになります。"
        }
      ]
    },
    {
      "id": "text_005",
      "location": "right mind-map branches",
      "content": "recycling / Community",
      "description_ja": "リサイクルと地域社会",
      "accepted_words": [
        "recycling",
        "community",
        "waste reduction",
        "local people"
      ],
      "common_typos": [
        "recicling",
        "comunity"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "recycling, community, waste reduction",
          "text_en": "recycling, community, waste reduction",
          "text_ja": "リサイクルと地域社会"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "The board says: recycling / Community.",
          "text_en": "The board says: recycling / Community.",
          "text_ja": "ボードには「recycling / Community」と書かれています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In the right mind-map branches, we can read...",
          "text_en": "In the right mind-map branches, we can read...",
          "text_ja": "リサイクルと地域社会として……と読めます。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The text 'recycling / Community' helps viewers understand the structure and environmental purpose of the project.",
          "text_en": "The text 'recycling / Community' helps viewers understand the structure and environmental purpose of the project.",
          "text_ja": "「recycling / Community」という文字はプロジェクトの構造と環境上の目的を理解する助けになります。"
        }
      ]
    },
    {
      "id": "text_006",
      "location": "lower-left mind-map branch",
      "content": "Energy",
      "description_ja": "エネルギーの項目",
      "accepted_words": [
        "Energy",
        "renewable energy",
        "clean energy",
        "power"
      ],
      "common_typos": [
        "Energey",
        "renewble energy"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "Energy, renewable energy, clean energy",
          "text_en": "Energy, renewable energy, clean energy",
          "text_ja": "エネルギーの項目"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "The board says: Energy.",
          "text_en": "The board says: Energy.",
          "text_ja": "ボードには「Energy」と書かれています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In the lower-left mind-map branch, we can read...",
          "text_en": "In the lower-left mind-map branch, we can read...",
          "text_ja": "エネルギーの項目として……と読めます。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The text 'Energy' helps viewers understand the structure and environmental purpose of the project.",
          "text_en": "The text 'Energy' helps viewers understand the structure and environmental purpose of the project.",
          "text_ja": "「Energy」という文字はプロジェクトの構造と環境上の目的を理解する助けになります。"
        }
      ]
    },
    {
      "id": "text_007",
      "location": "upper-right whiteboard",
      "content": "To Do: Survey / Interview / Data analysis / Slides",
      "description_ja": "残りの作業リスト",
      "accepted_words": [
        "To Do",
        "Survey",
        "Interview",
        "Data analysis"
      ],
      "common_typos": [
        "To Doo",
        "Survay",
        "Interveiw"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "To Do, Survey, Interview",
          "text_en": "To Do, Survey, Interview",
          "text_ja": "残りの作業リスト"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "The board says: To Do: Survey / Interview / Data analysis / Slides.",
          "text_en": "The board says: To Do: Survey / Interview / Data analysis / Slides.",
          "text_ja": "ボードには「To Do: Survey / Interview / Data analysis / Slides」と書かれています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In the upper-right whiteboard, we can read...",
          "text_en": "In the upper-right whiteboard, we can read...",
          "text_ja": "残りの作業リストとして……と読めます。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The text 'To Do: Survey / Interview / Data analysis / Slides' helps viewers understand the structure and environmental purpose of the project.",
          "text_en": "The text 'To Do: Survey / Interview / Data analysis / Slides' helps viewers understand the structure and environmental purpose of the project.",
          "text_ja": "「To Do: Survey / Interview / Data analysis / Slides」という文字はプロジェクトの構造と環境上の目的を理解する助けになります。"
        }
      ]
    },
    {
      "id": "text_008",
      "location": "green wall poster",
      "content": "Think Learn Grow",
      "description_ja": "考える・学ぶ・成長することを促す文",
      "accepted_words": [
        "Think",
        "Learn",
        "Grow",
        "Think Learn Grow"
      ],
      "common_typos": [
        "Think Lern Grow",
        "Thik Learn Grow"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "Think, Learn, Grow",
          "text_en": "Think, Learn, Grow",
          "text_ja": "考える・学ぶ・成長することを促す文"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "The board says: Think Learn Grow.",
          "text_en": "The board says: Think Learn Grow.",
          "text_ja": "ボードには「Think Learn Grow」と書かれています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In the green wall poster, we can read...",
          "text_en": "In the green wall poster, we can read...",
          "text_ja": "考える・学ぶ・成長することを促す文として……と読めます。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The text 'Think Learn Grow' helps viewers understand the structure and environmental purpose of the project.",
          "text_en": "The text 'Think Learn Grow' helps viewers understand the structure and environmental purpose of the project.",
          "text_ja": "「Think Learn Grow」という文字はプロジェクトの構造と環境上の目的を理解する助けになります。"
        }
      ]
    },
    {
      "id": "text_009",
      "location": "white environmental poster",
      "content": "Be kind to our planet",
      "description_ja": "地球を大切にするよう促す文",
      "accepted_words": [
        "Be kind to our planet",
        "care for the planet",
        "protect the Earth"
      ],
      "common_typos": [
        "Be kind to are planet",
        "too our planet"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "Be kind to our planet, care for the planet, protect the Earth",
          "text_en": "Be kind to our planet, care for the planet, protect the Earth",
          "text_ja": "地球を大切にするよう促す文"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "The board says: Be kind to our planet.",
          "text_en": "The board says: Be kind to our planet.",
          "text_ja": "ボードには「Be kind to our planet」と書かれています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In the white environmental poster, we can read...",
          "text_en": "In the white environmental poster, we can read...",
          "text_ja": "地球を大切にするよう促す文として……と読めます。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The text 'Be kind to our planet' helps viewers understand the structure and environmental purpose of the project.",
          "text_en": "The text 'Be kind to our planet' helps viewers understand the structure and environmental purpose of the project.",
          "text_ja": "「Be kind to our planet」という文字はプロジェクトの構造と環境上の目的を理解する助けになります。"
        }
      ]
    },
    {
      "id": "text_010",
      "location": "lower-right whiteboard",
      "content": "hand-drawn city with buildings and trees",
      "description_ja": "都市と木々の線画",
      "accepted_words": [
        "city drawing",
        "city sketch",
        "buildings and trees",
        "urban illustration"
      ],
      "common_typos": [
        "city drowing",
        "city skech",
        "bildings"
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "city drawing, city sketch, buildings and trees",
          "text_en": "city drawing, city sketch, buildings and trees",
          "text_ja": "都市と木々の線画"
        },
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "The board says: hand-drawn city with buildings and trees.",
          "text_en": "The board says: hand-drawn city with buildings and trees.",
          "text_ja": "ボードには「hand-drawn city with buildings and trees」と書かれています。"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "In the lower-right whiteboard, we can read...",
          "text_en": "In the lower-right whiteboard, we can read...",
          "text_ja": "都市と木々の線画として……と読めます。"
        },
        {
          "level": "advanced",
          "level_ja": "上級",
          "type": "grammar",
          "type_ja": "文法",
          "text": "The text 'hand-drawn city with buildings and trees' helps viewers understand the structure and environmental purpose of the project.",
          "text_en": "The text 'hand-drawn city with buildings and trees' helps viewers understand the structure and environmental purpose of the project.",
          "text_ja": "「hand-drawn city with buildings and trees」という文字はプロジェクトの構造と環境上の目的を理解する助けになります。"
        }
      ]
    }
  ],
  "actions_analysis": [
    {
      "id": "action_001",
      "description": "Discussing a group project",
      "description_ja": "グループプロジェクトについて話し合っている",
      "involved_elements": [
        "element_001",
        "element_002",
        "element_003",
        "element_004",
        "element_005"
      ],
      "synonyms": [
        "discuss a project",
        "discussing a project"
      ],
      "accepted_words": [
        "discuss a project",
        "discussing a project",
        "talk about a project",
        "have a group discussion"
      ],
      "common_typos": [
        "discusing",
        "groop discussion",
        "collaberate"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "talk together",
            "ja": "一緒に話す"
          }
        ],
        "A2": [
          {
            "en": "group discussion",
            "ja": "グループ話し合い"
          }
        ],
        "B1": [
          {
            "en": "collaborate on a project",
            "ja": "プロジェクトで協働する"
          }
        ],
        "B2": [
          {
            "en": "collaborative project planning",
            "ja": "協働的プロジェクト計画"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "turning four voices into one project direction",
          "ja": "4つの声を一つの方針へ変える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "discuss, project, group, together",
          "text_en": "discuss, project, group, together",
          "text_ja": "話し合う、プロジェクト、グループ、一緒に"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "have a group discussion about sustainable cities",
          "text_en": "have a group discussion about sustainable cities",
          "text_ja": "持続可能な都市について話し合う"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The students are working together to...",
          "text_en": "The students are working together to...",
          "text_ja": "生徒たちは……するために協力しています。"
        }
      ]
    },
    {
      "id": "action_002",
      "description": "Explaining an idea with hand gestures",
      "description_ja": "身振りを使って考えを説明している",
      "involved_elements": [
        "element_003",
        "element_001"
      ],
      "synonyms": [
        "explain an idea",
        "use hand gestures"
      ],
      "accepted_words": [
        "explain an idea",
        "use hand gestures",
        "gesture while speaking",
        "present a suggestion"
      ],
      "common_typos": [
        "explane",
        "hand gesturs",
        "present a sugeston"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "speak",
            "ja": "話す"
          }
        ],
        "A2": [
          {
            "en": "use gestures",
            "ja": "身振りを使う"
          }
        ],
        "B1": [
          {
            "en": "present a suggestion",
            "ja": "提案を示す"
          }
        ],
        "B2": [
          {
            "en": "communicate through verbal and nonverbal expression",
            "ja": "言語と非言語で伝える"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "drawing the shape of an idea with her hands",
          "ja": "手で考えの形を描く"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "explain, idea, gesture, speak",
          "text_en": "explain, idea, gesture, speak",
          "text_ja": "説明する、考え、身振り、話す"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "combine spoken words with expressive gestures",
          "text_en": "combine spoken words with expressive gestures",
          "text_ja": "言葉と表情豊かな身振りを組み合わせる"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "By using both hands, the speaker...",
          "text_en": "By using both hands, the speaker...",
          "text_ja": "両手を使うことで話し手は……"
        }
      ]
    },
    {
      "id": "action_003",
      "description": "Listening attentively",
      "description_ja": "注意深く話を聞いている",
      "involved_elements": [
        "element_002",
        "element_004",
        "element_005"
      ],
      "synonyms": [
        "listen",
        "listen attentively"
      ],
      "accepted_words": [
        "listen",
        "listen attentively",
        "listen carefully",
        "pay attention"
      ],
      "common_typos": [
        "lissen",
        "attentivly",
        "carefull"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "listen",
            "ja": "聞く"
          }
        ],
        "A2": [
          {
            "en": "listen carefully",
            "ja": "注意深く聞く"
          }
        ],
        "B1": [
          {
            "en": "listen attentively",
            "ja": "傾聴する"
          }
        ],
        "B2": [
          {
            "en": "demonstrate active listening",
            "ja": "積極的傾聴を示す"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "giving the speaker space to be understood",
          "ja": "話し手が理解される空間を与える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "listen, watch, speaker, attention",
          "text_en": "listen, watch, speaker, attention",
          "text_ja": "聞く、見る、話し手、注意"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "make eye contact and follow the explanation",
          "text_en": "make eye contact and follow the explanation",
          "text_ja": "視線を合わせ説明を理解しながら聞く"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Their expressions show that...",
          "text_en": "Their expressions show that...",
          "text_ja": "表情から……と分かります。"
        }
      ]
    },
    {
      "id": "action_004",
      "description": "Collaborating around a laptop",
      "description_ja": "ノートパソコンを囲んで協働している",
      "involved_elements": [
        "element_001",
        "element_006",
        "element_007",
        "element_008"
      ],
      "synonyms": [
        "work around a laptop",
        "share a computer"
      ],
      "accepted_words": [
        "work around a laptop",
        "share a computer",
        "research together",
        "review digital information"
      ],
      "common_typos": [
        "arround a laptop",
        "computor",
        "reserch together"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "use a computer",
            "ja": "コンピューターを使う"
          }
        ],
        "A2": [
          {
            "en": "share a laptop",
            "ja": "パソコンを共有する"
          }
        ],
        "B1": [
          {
            "en": "collaborate using technology",
            "ja": "技術で協働する"
          }
        ],
        "B2": [
          {
            "en": "shared digital workspace",
            "ja": "共有デジタル作業空間"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "gathering four viewpoints around one screen",
          "ja": "一つの画面の周りに4つの視点を集める"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "laptop, computer, research, together",
          "text_en": "laptop, computer, research, together",
          "text_ja": "パソコン、コンピューター、調査、一緒に"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "use a shared laptop to organize information",
          "text_en": "use a shared laptop to organize information",
          "text_ja": "共有パソコンで情報を整理する"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Because the laptop is in the center...",
          "text_en": "Because the laptop is in the center...",
          "text_ja": "パソコンが中央にあるため……"
        }
      ]
    },
    {
      "id": "action_005",
      "description": "Reviewing worksheets and notes",
      "description_ja": "ワークシートとメモを確認している",
      "involved_elements": [
        "element_007",
        "element_008",
        "element_011"
      ],
      "synonyms": [
        "review worksheets",
        "check notes"
      ],
      "accepted_words": [
        "review worksheets",
        "check notes",
        "read project papers",
        "compare information"
      ],
      "common_typos": [
        "revue worksheets",
        "chek notes",
        "documants"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "read papers",
            "ja": "資料を読む"
          }
        ],
        "A2": [
          {
            "en": "review worksheets",
            "ja": "ワークシートを見直す"
          }
        ],
        "B1": [
          {
            "en": "examine research findings",
            "ja": "調査結果を詳しく見る"
          }
        ],
        "B2": [
          {
            "en": "evaluate multiple sources",
            "ja": "複数資料を評価する"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "searching the pages for strong evidence",
          "ja": "強い根拠をページから探す"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "worksheet, note, compare, evidence",
          "text_en": "worksheet, note, compare, evidence",
          "text_ja": "ワークシート、メモ、比較する、根拠"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "review research sheets and compare ideas",
          "text_en": "review research sheets and compare ideas",
          "text_ja": "調査用紙を見直し考えを比較する"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Before making the slides, the team needs to...",
          "text_en": "Before making the slides, the team needs to...",
          "text_ja": "スライドを作る前にチームは……する必要があります。"
        }
      ]
    },
    {
      "id": "action_006",
      "description": "Planning a sustainable-cities project",
      "description_ja": "持続可能な都市のプロジェクトを計画している",
      "involved_elements": [
        "element_014",
        "element_015",
        "element_001"
      ],
      "synonyms": [
        "plan a sustainable city project",
        "study sustainable cities"
      ],
      "accepted_words": [
        "plan a sustainable city project",
        "study sustainable cities",
        "plan environmental solutions",
        "brainstorm urban solutions"
      ],
      "common_typos": [
        "sustainble city",
        "enviromental",
        "brain strom"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "plan a city project",
            "ja": "都市プロジェクトを計画する"
          }
        ],
        "A2": [
          {
            "en": "study sustainable cities",
            "ja": "持続可能な都市を学ぶ"
          }
        ],
        "B1": [
          {
            "en": "develop a sustainability proposal",
            "ja": "持続可能性の提案を作る"
          }
        ],
        "B2": [
          {
            "en": "integrated urban sustainability proposal",
            "ja": "統合的な都市持続可能性提案"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "imagining a city not yet built",
          "ja": "まだ作られていない都市を想像する"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "city, sustainable, environment, future",
          "text_en": "city, sustainable, environment, future",
          "text_ja": "都市、持続可能な、環境、未来"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "develop ideas for transport, recycling, energy, and green spaces",
          "text_en": "develop ideas for transport, recycling, energy, and green spaces",
          "text_ja": "交通、リサイクル、エネルギー、緑地の考えを発展させる"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The project asks how cities can...",
          "text_en": "The project asks how cities can...",
          "text_ja": "プロジェクトは都市がどのように……できるかを問います。"
        }
      ]
    },
    {
      "id": "action_007",
      "description": "Taking and preparing notes",
      "description_ja": "メモを取り、記録の準備をしている",
      "involved_elements": [
        "element_005",
        "element_008",
        "element_009",
        "element_010"
      ],
      "synonyms": [
        "take notes",
        "write notes"
      ],
      "accepted_words": [
        "take notes",
        "write notes",
        "prepare to write",
        "record ideas"
      ],
      "common_typos": [
        "take nots",
        "writeing",
        "recrod ideas"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "write",
            "ja": "書く"
          }
        ],
        "A2": [
          {
            "en": "record ideas",
            "ja": "考えを記録する"
          }
        ],
        "B1": [
          {
            "en": "document decisions",
            "ja": "決定を記録する"
          }
        ],
        "B2": [
          {
            "en": "translate discussion into a written record",
            "ja": "話し合いを記録へ変える"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "catching spoken ideas before they disappear",
          "ja": "話された考えを消える前に捉える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "pen, notebook, write, record",
          "text_en": "pen, notebook, write, record",
          "text_ja": "ペン、ノート、書く、記録する"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "prepare to record the group's important ideas",
          "text_en": "prepare to record the group's important ideas",
          "text_ja": "グループの重要な考えを記録する準備をする"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "She may write down...",
          "text_en": "She may write down...",
          "text_ja": "彼女は……を書き留めるかもしれません。"
        }
      ]
    },
    {
      "id": "action_008",
      "description": "Making eye contact and smiling",
      "description_ja": "視線を合わせて笑顔で反応している",
      "involved_elements": [
        "element_002",
        "element_003",
        "element_004",
        "element_005"
      ],
      "synonyms": [
        "make eye contact",
        "look at one another"
      ],
      "accepted_words": [
        "make eye contact",
        "look at one another",
        "smile at the speaker",
        "respond with a smile"
      ],
      "common_typos": [
        "make eyes contact",
        "look one anather",
        "speeker"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "look",
            "ja": "見る"
          }
        ],
        "A2": [
          {
            "en": "make eye contact",
            "ja": "視線を合わせる"
          }
        ],
        "B1": [
          {
            "en": "respond positively",
            "ja": "前向きに反応する"
          }
        ],
        "B2": [
          {
            "en": "sustain interpersonal engagement",
            "ja": "人同士の関わりを保つ"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "smiles passing understanding around the table",
          "ja": "テーブルを巡って理解を運ぶ笑顔"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "eye contact, smile, friendly, interested",
          "text_en": "eye contact, smile, friendly, interested",
          "text_ja": "視線、笑顔、親しみやすい、関心がある"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "react to the speaker with friendly expressions",
          "text_en": "react to the speaker with friendly expressions",
          "text_ja": "親しみのある表情で話し手に反応する"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "Their eye contact suggests that...",
          "text_en": "Their eye contact suggests that...",
          "text_ja": "視線から……と分かります。"
        }
      ]
    },
    {
      "id": "action_009",
      "description": "Organizing project tasks on the whiteboard",
      "description_ja": "ホワイトボード上で課題を整理している",
      "involved_elements": [
        "element_013",
        "element_014",
        "element_015"
      ],
      "synonyms": [
        "organize tasks",
        "make a project plan"
      ],
      "accepted_words": [
        "organize tasks",
        "make a project plan",
        "create a mind map",
        "write a to-do list"
      ],
      "common_typos": [
        "organise",
        "project plane",
        "mindmap"
      ],
      "cefr_vocabulary": {
        "A1": [
          {
            "en": "make a plan",
            "ja": "計画を作る"
          }
        ],
        "A2": [
          {
            "en": "create a mind map",
            "ja": "マインドマップを作る"
          }
        ],
        "B1": [
          {
            "en": "structure the project",
            "ja": "プロジェクトを構造化する"
          }
        ],
        "B2": [
          {
            "en": "visual task management",
            "ja": "視覚的課題管理"
          }
        ]
      },
      "creative_expressions": [
        {
          "en": "giving the project a visible skeleton",
          "ja": "プロジェクトに見える骨組みを与える"
        }
      ],
      "hints": [
        {
          "level": "beginner",
          "level_ja": "初級",
          "type": "vocabulary",
          "type_ja": "語彙",
          "text": "plan, task, list, mind map",
          "text_en": "plan, task, list, mind map",
          "text_ja": "計画、課題、リスト、マインドマップ"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "phrase",
          "type_ja": "フレーズ",
          "text": "organize the project with a mind map and checklist",
          "text_en": "organize the project with a mind map and checklist",
          "text_ja": "マインドマップとチェックリストで整理する"
        },
        {
          "level": "intermediate",
          "level_ja": "中級",
          "type": "sentence_starter",
          "type_ja": "文の書き出し",
          "text": "The visual plan helps the team...",
          "text_en": "The visual plan helps the team...",
          "text_ja": "視覚的な計画はチームが……するのに役立ちます。"
        }
      ]
    }
  ],
  "spatial_relationships": [
    {
      "subject": "gray-hoodie student",
      "relationship": "to the left of",
      "object": "female speaker",
      "example_beginner": "The boy in gray is to the left of the girl.",
      "example_intermediate": "The student in the gray hoodie is seated to the left of the female speaker."
    },
    {
      "subject": "female speaker",
      "relationship": "between",
      "object": "two male students",
      "example_beginner": "The girl is between two boys.",
      "example_intermediate": "The female speaker sits between the students in gray and navy."
    },
    {
      "subject": "navy-sweatshirt student",
      "relationship": "behind",
      "object": "laptop",
      "example_beginner": "The boy in navy is behind the laptop.",
      "example_intermediate": "The male student in navy is seated behind the open laptop."
    },
    {
      "subject": "striped-shirt student",
      "relationship": "to the right of",
      "object": "navy student",
      "example_beginner": "The girl in blue is to the right.",
      "example_intermediate": "The striped-shirt student sits to the right of the navy-shirt student."
    },
    {
      "subject": "four students",
      "relationship": "around",
      "object": "table",
      "example_beginner": "The students are around the table.",
      "example_intermediate": "The four classmates are seated around the same table."
    },
    {
      "subject": "laptop",
      "relationship": "in the center of",
      "object": "table",
      "example_beginner": "The laptop is in the center.",
      "example_intermediate": "The laptop is positioned near the center of the shared workspace."
    },
    {
      "subject": "worksheets",
      "relationship": "across",
      "object": "table",
      "example_beginner": "The papers are across the table.",
      "example_intermediate": "Worksheets and notes are spread across the table."
    },
    {
      "subject": "pencil holder",
      "relationship": "in front of",
      "object": "laptop",
      "example_beginner": "The pens are in front of the laptop.",
      "example_intermediate": "The mesh pencil holder stands in front of the laptop."
    },
    {
      "subject": "books",
      "relationship": "to the right of",
      "object": "pencil holder",
      "example_beginner": "The books are to the right.",
      "example_intermediate": "The stack of books rests to the right of the pen holder."
    },
    {
      "subject": "pencil case",
      "relationship": "near",
      "object": "front edge of table",
      "example_beginner": "The pencil case is near the front.",
      "example_intermediate": "The pencil case lies near the front edge of the table."
    },
    {
      "subject": "whiteboard",
      "relationship": "behind",
      "object": "students",
      "example_beginner": "The whiteboard is behind them.",
      "example_intermediate": "The large whiteboard covers the wall behind the group."
    },
    {
      "subject": "mind map",
      "relationship": "in the center of",
      "object": "whiteboard",
      "example_beginner": "The mind map is in the center.",
      "example_intermediate": "The Sustainable Cities mind map occupies the center of the whiteboard."
    },
    {
      "subject": "project plan",
      "relationship": "to the left of",
      "object": "mind map",
      "example_beginner": "The plan is to the left.",
      "example_intermediate": "The Project Plan is written to the left of the mind map."
    },
    {
      "subject": "to-do list",
      "relationship": "to the right of",
      "object": "mind map",
      "example_beginner": "The list is to the right.",
      "example_intermediate": "The task checklist appears to the right of the mind map."
    },
    {
      "subject": "posters",
      "relationship": "beside",
      "object": "window",
      "example_beginner": "The posters are beside the window.",
      "example_intermediate": "Two environmental posters hang beside the sunlit window."
    },
    {
      "subject": "natural light",
      "relationship": "through",
      "object": "window",
      "example_beginner": "Light comes through the window.",
      "example_intermediate": "Soft daylight enters through the window on the left."
    }
  ],
  "adjective_library": {
    "students": [
      "young",
      "engaged",
      "cooperative",
      "attentive",
      "friendly",
      "confident",
      "thoughtful",
      "supportive",
      "communicative",
      "curious"
    ],
    "discussion": [
      "lively",
      "collaborative",
      "focused",
      "productive",
      "organized",
      "interactive",
      "constructive",
      "evidence-based"
    ],
    "classroom": [
      "bright",
      "sunlit",
      "clean",
      "organized",
      "welcoming",
      "modern",
      "academic",
      "comfortable",
      "open"
    ],
    "project": [
      "environmental",
      "sustainable",
      "collaborative",
      "research-based",
      "creative",
      "practical",
      "interdisciplinary",
      "structured"
    ],
    "whiteboard": [
      "large",
      "informative",
      "visual",
      "handwritten",
      "organized",
      "detailed",
      "central"
    ],
    "materials": [
      "printed",
      "handwritten",
      "annotated",
      "colorful",
      "organized",
      "shared",
      "academic",
      "spread out"
    ],
    "technology": [
      "digital",
      "portable",
      "shared",
      "central",
      "modern",
      "research-oriented"
    ],
    "mood": [
      "positive",
      "supportive",
      "energetic",
      "intellectual",
      "hopeful",
      "productive",
      "creative",
      "respectful",
      "inclusive"
    ]
  },
  "preposition_library": [
    {
      "preposition": "in",
      "meaning_ja": "〜の中で",
      "example": "The students are working in a classroom."
    },
    {
      "preposition": "around",
      "meaning_ja": "〜の周りに",
      "example": "Four students are sitting around a table."
    },
    {
      "preposition": "at",
      "meaning_ja": "〜で",
      "example": "They are working at a large white table."
    },
    {
      "preposition": "on",
      "meaning_ja": "〜の上に",
      "example": "The laptop and papers are on the table."
    },
    {
      "preposition": "behind",
      "meaning_ja": "〜の後ろに",
      "example": "The whiteboard is behind the students."
    },
    {
      "preposition": "in front of",
      "meaning_ja": "〜の前に",
      "example": "The pencil holder is in front of the laptop."
    },
    {
      "preposition": "between",
      "meaning_ja": "〜の間に",
      "example": "The speaker is between two students."
    },
    {
      "preposition": "to the left of",
      "meaning_ja": "〜の左に",
      "example": "The plan is to the left of the mind map."
    },
    {
      "preposition": "to the right of",
      "meaning_ja": "〜の右に",
      "example": "The checklist is to the right of the mind map."
    },
    {
      "preposition": "beside",
      "meaning_ja": "〜のそばに",
      "example": "The posters are beside the window."
    },
    {
      "preposition": "near",
      "meaning_ja": "〜の近くに",
      "example": "The pencil case is near the front edge."
    },
    {
      "preposition": "across",
      "meaning_ja": "〜全体に",
      "example": "Worksheets are spread across the table."
    },
    {
      "preposition": "through",
      "meaning_ja": "〜を通して",
      "example": "Light enters through the window."
    },
    {
      "preposition": "with",
      "meaning_ja": "〜を使って",
      "example": "She explains the idea with both hands."
    },
    {
      "preposition": "about",
      "meaning_ja": "〜について",
      "example": "They are talking about sustainable cities."
    },
    {
      "preposition": "for",
      "meaning_ja": "〜のために",
      "example": "They are preparing materials for a presentation."
    }
  ],
  "grammar_library_hints": [
    {
      "id": "grammar_001",
      "pattern": "Plural subject + are + present participle (-ing)",
      "label_ja": "複数主語の現在進行形",
      "level": "beginner",
      "purpose_ja": "複数の人物が今行っている動作を表す。",
      "examples": [
        "Four students are discussing a project.",
        "They are sharing ideas.",
        "The students are working together."
      ],
      "hints": [
        "four studentsやtheyにはareを使います。"
      ]
    },
    {
      "id": "grammar_002",
      "pattern": "There is / There are + noun",
      "label_ja": "存在を表すThere構文",
      "level": "beginner",
      "purpose_ja": "教室内の人や物の存在を説明する。",
      "examples": [
        "There is a laptop on the table.",
        "There are many worksheets.",
        "There is a whiteboard behind them."
      ],
      "hints": [
        "単数にはThere is、複数にはThere areを使います。"
      ]
    },
    {
      "id": "grammar_003",
      "pattern": "Subject + be + adjective",
      "label_ja": "be動詞と形容詞",
      "level": "beginner",
      "purpose_ja": "人物や雰囲気の状態を表す。",
      "examples": [
        "The students are engaged.",
        "The classroom is bright.",
        "The discussion is productive."
      ],
      "hints": [
        "engaged, bright, productiveなどを使えます。"
      ]
    },
    {
      "id": "grammar_004",
      "pattern": "Subject + be + prepositional phrase",
      "label_ja": "位置を表す前置詞句",
      "level": "beginner",
      "purpose_ja": "人物や物の位置関係を説明する。",
      "examples": [
        "The students are around the table.",
        "The laptop is in the center.",
        "The board is behind them."
      ],
      "hints": [
        "around, behind, betweenなどを使います。"
      ]
    },
    {
      "id": "grammar_005",
      "pattern": "Subject + be + -ing + object",
      "label_ja": "現在進行形と目的語",
      "level": "beginner",
      "purpose_ja": "誰が何をしているかを具体化する。",
      "examples": [
        "The girl is explaining her idea.",
        "They are reviewing notes.",
        "The boy is watching the speaker."
      ],
      "hints": [
        "動作の後ろに目的語を加えます。"
      ]
    },
    {
      "id": "grammar_006",
      "pattern": "Subject + look / seem + adjective",
      "label_ja": "look・seemと形容詞",
      "level": "intermediate",
      "purpose_ja": "画像から分かる印象を表す。",
      "examples": [
        "The students look interested.",
        "The speaker looks confident.",
        "The discussion seems productive."
      ],
      "hints": [
        "lookは見た目、seemは推測を表します。"
      ]
    },
    {
      "id": "grammar_007",
      "pattern": "while / as + clause",
      "label_ja": "同時進行を表すwhile・as",
      "level": "intermediate",
      "purpose_ja": "複数の同時動作をつなぐ。",
      "examples": [
        "She gestures while she speaks.",
        "The others smile as they listen.",
        "They review papers while using the laptop."
      ],
      "hints": [
        "whileやasで同時動作をつなぎます。"
      ]
    },
    {
      "id": "grammar_008",
      "pattern": "One student ..., while another ...",
      "label_ja": "人物の動作を対比する構文",
      "level": "intermediate",
      "purpose_ja": "異なる役割や動作を対比する。",
      "examples": [
        "One student is speaking, while another is preparing notes.",
        "One student explains, while the others listen."
      ],
      "hints": [
        "oneとanotherを使い分けます。"
      ]
    },
    {
      "id": "grammar_009",
      "pattern": "because / so that + clause",
      "label_ja": "理由・目的の節",
      "level": "intermediate",
      "purpose_ja": "理由や目的を説明する。",
      "examples": [
        "The laptop is central because everyone needs to see it.",
        "She gestures so that others can understand."
      ],
      "hints": [
        "becauseは理由、so thatは目的です。"
      ]
    },
    {
      "id": "grammar_010",
      "pattern": "who / which / that relative clause",
      "label_ja": "関係代名詞",
      "level": "intermediate",
      "purpose_ja": "人物や物に追加情報を加える。",
      "examples": [
        "The girl who is speaking wears cream.",
        "The laptop that is open is central.",
        "The board, which has a mind map, is behind them."
      ],
      "hints": [
        "人にはwho、物にはwhichまたはthatを使います。"
      ]
    },
    {
      "id": "grammar_011",
      "pattern": "Subject + be + past participle",
      "label_ja": "受動態",
      "level": "intermediate",
      "purpose_ja": "置かれた状態や整理された状態を表す。",
      "examples": [
        "The papers are spread across the table.",
        "The tasks are written on the board.",
        "The books are stacked nearby."
      ],
      "hints": [
        "be動詞 + 過去分詞を使います。"
      ]
    },
    {
      "id": "grammar_012",
      "pattern": "Present participial phrase, main clause",
      "label_ja": "現在分詞の分詞構文",
      "level": "advanced",
      "purpose_ja": "同じ主語の同時動作を簡潔に表す。",
      "examples": [
        "Gesturing with both hands, she explains her idea.",
        "Leaning forward, the boy listens.",
        "Holding a pen, the girl considers the proposal."
      ],
      "hints": [
        "文頭を動詞ingで始めます。"
      ]
    },
    {
      "id": "grammar_013",
      "pattern": "Past participial phrase, main clause",
      "label_ja": "過去分詞の分詞構文",
      "level": "advanced",
      "purpose_ja": "背景や受け身の状態を文頭で示す。",
      "examples": [
        "Surrounded by materials, the students discuss.",
        "Illuminated by daylight, the room feels open.",
        "Organized around a theme, the map connects ideas."
      ],
      "hints": [
        "Surrounded, Illuminated, Organizedなどを使います。"
      ]
    },
    {
      "id": "grammar_014",
      "pattern": "It looks like / It seems that / appears to",
      "label_ja": "推量表現",
      "level": "advanced",
      "purpose_ja": "画像から推測した内容を慎重に述べる。",
      "examples": [
        "It looks like they are preparing slides.",
        "The girl seems to lead the discussion.",
        "The boy appears to consider her idea."
      ],
      "hints": [
        "断定できない目的や役割に使います。"
      ]
    },
    {
      "id": "grammar_015",
      "pattern": "By + present participle, main clause",
      "label_ja": "By + 動名詞",
      "level": "advanced",
      "purpose_ja": "方法を説明する。",
      "examples": [
        "By sharing ideas, they improve the project.",
        "By using a mind map, they connect issues.",
        "By listing tasks, they manage the work."
      ],
      "hints": [
        "By + 動詞ingで「〜することで」を表します。"
      ]
    },
    {
      "id": "grammar_016",
      "pattern": "not only A but also B",
      "label_ja": "not only A but also B",
      "level": "advanced",
      "purpose_ja": "2つの重要点を強調する。",
      "examples": [
        "The project considers not only technology but also community.",
        "They use not only digital resources but also printed documents."
      ],
      "hints": [
        "AとBに同じ文法形を置きます。"
      ]
    }
  ],
  "sentence_building_support": {
    "beginner": [
      {
        "step": 1,
        "question_ja": "誰がいますか？",
        "template": "There are ______.",
        "example": "There are four students."
      },
      {
        "step": 2,
        "question_ja": "どこにいますか？",
        "template": "They are in ______.",
        "example": "They are in a classroom."
      },
      {
        "step": 3,
        "question_ja": "何をしていますか？",
        "template": "They are ______ing.",
        "example": "They are discussing a project."
      },
      {
        "step": 4,
        "question_ja": "何についてですか？",
        "template": "They are talking about ______.",
        "example": "They are talking about sustainable cities."
      },
      {
        "step": 5,
        "question_ja": "何がありますか？",
        "template": "There is / are ______ on the table.",
        "example": "There is a laptop and there are many papers."
      },
      {
        "step": 6,
        "question_ja": "どんな雰囲気ですか？",
        "template": "The atmosphere is ______.",
        "example": "The atmosphere is friendly and productive."
      }
    ],
    "intermediate": [
      {
        "template": "Four high school students are ______ing around ______.",
        "example": "Four high school students are discussing a project around a white table."
      },
      {
        "template": "One student is ______ing, while the others are ______ing.",
        "example": "One student is explaining an idea, while the others are listening."
      },
      {
        "template": "On the table, there is / are ______.",
        "example": "On the table, there are worksheets, notebooks, pens, books, and a laptop."
      },
      {
        "template": "Behind the students, the whiteboard shows ______.",
        "example": "Behind the students, the board shows a plan, a mind map, and a checklist."
      },
      {
        "template": "The project focuses on ______, including ______.",
        "example": "The project focuses on sustainable cities, including transportation, recycling, and energy."
      },
      {
        "template": "It looks like the students are ______.",
        "example": "It looks like the students are preparing a research presentation."
      }
    ],
    "advanced": [
      {
        "template": "Present participial phrase, main clause.",
        "example": "Gesturing with both hands, the student in cream explains her proposal."
      },
      {
        "template": "Past participial phrase, main clause.",
        "example": "Surrounded by research materials, the students collaborate on a sustainability project."
      },
      {
        "template": "Relative clause.",
        "example": "The girl who is holding a pen appears ready to record the next decision."
      },
      {
        "template": "By + -ing, main clause.",
        "example": "By combining printed research with digital tools, the team creates a shared evidence base."
      },
      {
        "template": "Not only A but also B.",
        "example": "The project considers not only technology but also community participation."
      },
      {
        "template": "Cause and effect.",
        "example": "Because the tasks are visible to everyone, the group can coordinate its responsibilities effectively."
      }
    ]
  },
  "sample_answers": {
    "beginner": [
      "Four students are in a classroom.",
      "They are sitting around a white table.",
      "They are discussing a project.",
      "One girl is explaining her idea.",
      "The other students are listening.",
      "There is a laptop on the table.",
      "There are many papers and notebooks.",
      "A whiteboard is behind them.",
      "The project is about sustainable cities.",
      "The classroom is bright and friendly."
    ],
    "intermediate": [
      "Four high school students are working together around a large white table.",
      "The girl in the cream sweater is explaining an idea with both hands.",
      "The boy in the gray hoodie looks thoughtful, while the boy in navy smiles at the speaker.",
      "The girl in the striped shirt holds a pen and appears ready to take notes.",
      "An open laptop is placed at the center of the table.",
      "Worksheets, handwritten notes, books, colored pens, and sticky notes are spread around it.",
      "The whiteboard shows a project plan and a sustainable-cities mind map.",
      "The mind map connects transportation, green spaces, recycling, community, and energy.",
      "A checklist includes surveys, interviews, data analysis, and slides.",
      "Natural light and environmental posters create a positive atmosphere."
    ],
    "advanced": [
      "Seated around a shared white table, four high school students engage in a collaborative discussion about sustainable cities.",
      "Gesturing with both hands, the student in cream presents a developing idea while her classmates respond with attentive eye contact and encouraging smiles.",
      "The centrally positioned laptop functions as a shared digital workspace surrounded by annotated worksheets, handwritten notes, reference books, markers, and sticky notes.",
      "Behind them, the whiteboard combines a four-stage project plan, an interconnected sustainability mind map, and a checklist of research and presentation tasks.",
      "The environmental posters and natural daylight reinforce the scene's hopeful connection between academic growth and responsibility toward the planet."
    ]
  },
  "full_description_support": {
    "beginner_model": "Four students are in a classroom. They are sitting around a large white table. They are discussing a project about sustainable cities. One girl is explaining her idea with her hands. The other students are listening and smiling. There is an open laptop on the table. There are many papers, notebooks, pens, and books. A large whiteboard is behind the students. The classroom is bright and friendly.",
    "intermediate_model": "Four high school students are working together around a large white table in a bright classroom. The girl in the cream sweater is speaking and using both hands to explain her idea. The boy in the gray hoodie listens with one hand near his chin, the boy in the navy sweatshirt leans forward and smiles, and the girl in the striped shirt holds a pen near her notebook. An open laptop stands in the center of the table. Research sheets, handwritten notes, colored pens, a pencil case, sticky notes, books, and notebooks are spread around it. Behind the students, the whiteboard shows a Project Plan, a Sustainable Cities mind map, and a To Do checklist. Natural light and environmental posters create a positive and productive atmosphere.",
    "advanced_model": "Bathed in soft natural light, four high school students sit around a shared white table and engage in an animated project discussion about sustainable cities. The student in the cream knit sweater explains a developing idea through expressive gestures, while her classmates demonstrate active listening through eye contact, thoughtful posture, and encouraging smiles. A centrally positioned laptop acts as a shared digital resource, surrounded by annotated worksheets, handwritten notes, reference books, colored markers, sticky notes, and notebooks. The whiteboard transforms the discussion into a structured workflow: a four-stage Project Plan moves from theme and research to ideas and presentation, while a central mind map connects transportation, green spaces, recycling, community, and energy. A checklist of Survey, Interview, Data analysis, and Slides shows that the project combines primary research, analytical reasoning, and multimedia communication. The nearby posters connect personal learning with environmental responsibility, making the classroom feel open, respectful, intellectually active, and oriented toward a hopeful future."
  },
  "cefr_model_answers": {
    "A1": [
      {
        "en": "Four students are in a classroom. They are talking about a project.",
        "ja": "4人の生徒が教室にいます。プロジェクトについて話しています。",
        "focus": "複数主語にareを使う。"
      },
      {
        "en": "A girl is speaking. The other students are listening.",
        "ja": "女子生徒が話し、ほかの生徒は聞いています。",
        "focus": "単数isと複数areを使い分ける。"
      },
      {
        "en": "There is a laptop on the table. There are many papers.",
        "ja": "テーブルにパソコンがあり、多くの資料があります。",
        "focus": "There isとThere areを使う。"
      }
    ],
    "A2": [
      {
        "en": "Four high school students are sitting around a table and discussing a project about sustainable cities.",
        "ja": "4人の高校生がテーブルを囲み、持続可能な都市について話し合っています。",
        "focus": "andとaboutを使う。"
      },
      {
        "en": "One girl is explaining her idea with both hands, while the others are listening and smiling.",
        "ja": "1人の女子生徒が両手で考えを説明し、ほかの生徒は聞いて笑っています。",
        "focus": "whileで同時動作をつなぐ。"
      },
      {
        "en": "The whiteboard shows a project plan, a mind map, and a task list.",
        "ja": "ホワイトボードは計画、マインドマップ、課題リストを示しています。",
        "focus": "showで複数情報を説明する。"
      }
    ],
    "B1": [
      {
        "en": "A group of engaged students is collaborating on an environmental project by sharing ideas and reviewing research materials.",
        "ja": "積極的な生徒たちが、考えを共有し調査資料を確認して環境プロジェクトに協働しています。",
        "focus": "collaborateとby + 動名詞を使う。"
      },
      {
        "en": "The centrally placed laptop and the documents spread across the table allow every member to participate in the planning process.",
        "ja": "中央のパソコンと広げられた資料により、全員が計画過程に参加できます。",
        "focus": "過去分詞とallow + 人 + to不定詞を使う。"
      },
      {
        "en": "Their project examines transportation, green spaces, recycling, community, and energy as connected parts of urban sustainability.",
        "ja": "プロジェクトは交通、緑地、リサイクル、地域、エネルギーを都市の持続可能性の関連要素として調べています。",
        "focus": "connected partsとurban sustainabilityを使う。"
      }
    ],
    "B2": [
      {
        "en": "Gesturing expressively as she speaks, the student in the cream sweater guides a discussion in which her classmates contribute through attentive listening and eye contact.",
        "ja": "表情豊かに身振りをしながら、クリーム色のセーターの生徒は、クラスメートが傾聴と視線で参加する話し合いを導いています。",
        "focus": "分詞構文、as、in whichを使う。"
      },
      {
        "en": "The whiteboard, which combines a conceptual mind map with a sequential task list, transforms a broad environmental theme into a manageable research workflow.",
        "ja": "概念図と順序化された課題リストを組み合わせたホワイトボードは、広い環境テーマを管理可能な調査工程へ変えます。",
        "focus": "whichとtransform A into Bを使う。"
      },
      {
        "en": "By integrating printed evidence, digital resources, primary research, and collaborative decision-making, the students appear to be developing not only a presentation but also a deeper understanding of urban sustainability.",
        "ja": "紙資料、デジタル資料、一次調査、共同意思決定を統合し、生徒たちは発表だけでなく都市の持続可能性への深い理解も育てているようです。",
        "focus": "By + 動名詞、appear to、not only A but also Bを使う。"
      }
    ]
  }
};

if (typeof globalThis !== "undefined") {
  globalThis.scene013Data = scene013Data;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = scene013Data;
}
