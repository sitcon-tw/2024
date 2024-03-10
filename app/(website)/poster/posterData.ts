export default [
  {
    title: "我預判你的預判:中學生與AI圍棋理論的對戰歷程",
    author: "tudo",
    authorDescription:
      "我是一名16歲的高中生，對於軟硬軔三位一體的電子世界充滿了好奇心。曾於在 Dimwave Tech 實習，在裡面專注於學習硬體的開發。我還在 CKCSC 學習 C++ 和演算法，搭建起了程式設計基礎。我同時也對資訊安全和人工智慧感興趣，致力於創建對這個社會、對國家、對自己有價值的項目。未來目標是在科技業留下自己的印記。我目前的目標是學習資料科學和數學、量子電腦、資訊安全和深度學習。",
    description:
      "我的研究動機源於對電腦圍棋的憧憬，目的在於分享我從不懂AI到逐步開發出我自己的圍棋機器人SigmaGo的過程，希望能激勵同為中學生的夢想家。在研究過程中，我從《深度學習與圍棋》和AlphaGo論文中學習到了蒙特卡洛樹搜索法、Policy網路和Value網路等關鍵概念。我用Pytorch訓練卷積神經網路，並從開源網站獲得大量九路圍棋棋譜以加強訓練。面對SigmaGo無法完全理解圍棋規則的挑戰，我引入了Gym_Go模組來確保合法棋步的選擇，並透過Go Text Protocol與Sabaki介面連接，測試SigmaGo的實際棋力。在與不同棋力的GNUGo對戰中，我發現SigmaGo的勝率隨對手棋力提升而下降，其棋力約等於GNUGo的第四等級。未來，我計劃引入更多高級技術如MCTS法、Value網路和強化學習，以提升SigmaGo的能力。",
    tags: [`DL`, `CV`, `電腦對局`],
    file: "我預判你的預判 中學生與AI圍棋理論的對戰歷程.pdf",
    image: "我預判你的預判 中學生與AI圍棋理論的對戰歷程.webp",
    avatars: ["我預判你的預判 中學生與AI圍棋理論的對戰歷程_1.webp"],
  },
  {
    title: "演算法家家酒",
    author: "王昱智 / 王子杰 / 白雋揚",
    authorDescription: "目前就讀於逢甲大學資訊工程學系四年級生",
    description:
      "設計一個「遊戲式演算法學習系統」，採用可觸摸(Tangle)的 LEGO 積木來編排關卡以及體現(Embodied)操作的學習方式。此學習方式，很像兒童的「家家酒」角色扮演遊戲，玩家透過對話、想像和創造的過程獲得趣味。同樣的，玩家在此系統中，可以扮演出題老師透過 LEGO 編輯演算法關卡，也可以扮演答題學生透過操作玩具來實現演算法步驟，是一個充滿人際互動與教育意義的遊戲。",
    tags: [`物體偵測`, `演算法學習`],
    file: "演算法家家酒.pdf",
    image: "演算法家家酒.webp",
    avatars: [
      "演算法家家酒_1.webp",
      "演算法家家酒_2.webp",
      "演算法家家酒_3.webp",
    ],
  },
  {
    title: "Taiwan-LLM Tutor: Large Language Models",
    author: "Jiawei",
    authorDescription: `我是 Jiawei，現就讀台大資工博士二年級，並於台大資料分析與決策社擔任課程長，熱愛資料、AI、數學、教育。原本從事計算數學與電腦視覺相關研究，近期跨領域至 LLM 相關應用，渴望做出一個 AI 家教幫助偏鄉孩童與弱勢族群，目前我們還在努力的路上，成果到達及格的邊緣。

Linkedln: [https://www.linkedin.com/in/jwliao1209/](https://www.linkedin.com/in/jwliao1209/)

GitHub: [https://github.com/jwliao1209](https://github.com/jwliao1209)`,
    description:
      "在本專案中，我們想建立 AI tutor 回答高中生社會科的問題。我們整理近 30 年的學測社會科考題與社會科題庫，利用 instruction tuning fine tune TAIWAN-LLM-7B 模型，並採用 LoftQ、Lion Optimizer 等方法提升模型效能，最後比較模型於社會三科中的表現。我們的專案公開至 https://github.com/jwliao1209/TWLLM-Tutor。",
    tags: [`LLM`, `NLP`, `AI`],
    file: "Taiwan-LLM Tutor Large Language Models.pdf",
    image: "Taiwan-LLM Tutor Large Language Models.webp",
    avatars: ["Taiwan-LLM Tutor Large Language Models_1.webp"],
  },
  {
    title: "摸透語言模型的習性:LLM 會偏袒什麼樣的文章?",
    author: "陳妍姍",
    authorDescription: `資工系大三學生，對 NLP、影像、演算法、神經科學、經濟學、心理學都有興趣，什麼都學一點，但什麼都沒有很厲害，還在努力探索未來的方向當中。目前在奧義智慧科技當 ML research intern。`,
    description:
      "隨著 ChatGPT 等語言模型的使用快速成長，可以預期未來網路上將充斥著大型自然語言模型 (Large Language Models，簡稱 LLM) 直接生成的文章。我們不禁好奇，這些 LLM 會不會偏好自己生成的文章呢？更明確地說，給定 LLM 數篇可用以回答問題的參考文章時，它們是否更傾向以自己生成的內容作為回答依據，造成 LLM 的回答不夠中立，甚至被自己的文章誤導、產生幻覺呢？在這場演講中，將以嚴謹的實驗討論 ChatGPT 與 Llama 2 這兩個 LLM 對「人類撰寫的文章」、「自己生成的文章」、「其他 LLM 生成的文章」分別的偏好程度。",
    tags: [`NLP`, `LLM`, `Retrieval Augmented Generation`],
    file: "摸透語言模型的習性 LLM 會偏袒什麼樣的文章.pdf",
    image: "摸透語言模型的習性 LLM 會偏袒什麼樣的文章.webp",
    avatars: ["摸透語言模型的習性 LLM 會偏袒什麼樣的文章_1.webp"],
  },
  {
    title:
      "Enhanced Real-World Video Question-Answering :A Selective-Based Approach",
    author: "恩恩",
    authorDescription: `As a mathematics student with a strong passion for artificial intelligence, I enjoy leveraging my mathematical knowledge to solve real‐world computer vision tasks through AI integration. For example, I have recently developed a real‐time automatic system for tracking and analyzing basketball matches using computer vision, deep learning models, and various mathematical techniques. As hobbies, I have served as the team leader in three AI Cup competitions, each with commendable results.`,
    description: `In this poster, we address video question-answering (VQA) challenges within the STAR dataset [1]. We present a modified version of the Flipped VQA 7B model [2], enhancing it by implementing a trainable frame selector and utilizing Llama-adapter [3] for fine-tuning. Also, we conduct an in-depth analysis of failed predictions and fine-tune hyper-parameters for improved accuracy.

- [1] Bo Wu, et el. STAR: A Benchmark for Situated Reasoning in Real-World Videos. In NeurIPS 2021.
- [2] Dohwan Ko, et el. Large Language Models are Temporal and Causal Reasoners for Video Question Answering. In EMNLP 2023.
- [3] R Zhang, et al. LLaMA-Adapter: Efficient Fine-tuning of Language Models with Zero-init Attention. arXiv:2303.16199, 2023.`,
    tags: [`VQA`, `LLM`, `NLP`],
    file: "Enhanced Real-World Video Question-Answering A Selective-Based Approach.pdf",
    image:
      "Enhanced Real-World Video Question-Answering A Selective-Based Approach.webp",
    avatars: [
      "Enhanced Real-World Video Question-Answering A Selective-Based Approach_1.webp",
    ],
  },
  {
    title: "利用 Transformer 判斷人臉健康狀況系統",
    author: "Lily",
    authorDescription: `目前資工系四年級，資工越學越有興趣。`,
    description: `人臉是人類獨特的身份標誌，提供年齡、情緒和健康等資訊。人臉與健康息息相關，通過觀察臉部，如眼睛、皮膚，可以初步推斷是否有健康問題，對於病症的及時治療和改善相當重要。本研究使用 Dlib 函式庫進行人臉偵測，以及使用 Vision Transformer 模型訓練，此模型是基於多頭自注意力機制（Multi-Head Self-Attention）的圖像式深度學習模型，利用自注意力機制提升模型訓練速度，及其可擴展性，被廣泛應用於電腦視覺領域，因此本研究使用 Vision Transformer 模型，識別人臉的健康與帶有病徵的狀況。訓練模型使用的公開資料集來自 Kaggle、Roboflow，以及使用 Google 、 Microsoft Bing 等搜尋引擎蒐集圖像。此研究使用5種病徵及無病徵，共6種類別，作為圖像資料集的類別來訓練 Vision Transformer 模型，得到的 Accuracy 為80.24 %， Loss 值為0.9988。`,
    tags: [`DL、臉部辨識、Transformer`],
    file: "利用 Transformer 判斷人臉健康狀況系統.pdf",
    image: "利用 Transformer 判斷人臉健康狀況系統.webp",
    avatars: ["利用 Transformer 判斷人臉健康狀況系統_1.webp"],
  },
];
