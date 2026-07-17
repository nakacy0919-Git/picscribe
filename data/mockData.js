const mockImageData = {
    id: 1,
    // プロトタイプ用にUnsplashの犬の画像を使用（後ほどAI画像に差し替え可能）
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800",
    
    // ChatGPTなどに画像を作らせた際の「正しい描写の核」となるデータ
    analysis: {
        subjects: ["dog", "puppy", "canine", "retriever"],
        actions: ["catching", "biting", "chasing", "playing", "jumping"],
        objects: ["ball", "tennis ball", "toy"],
        attributes: ["happy", "brown", "grass", "green", "sunny", "outdoor"]
    },
    
    // ユーザーに提示する、バリエーション豊かな模範解答
    sampleAnswers: [
        "A happy brown dog is catching a yellow tennis ball in the green grass.",
        "A puppy is playing with a ball on the grass.",
        "A joyful canine jumps to catch its toy outdoors."
    ]
};