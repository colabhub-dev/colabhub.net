import Card from "@/components/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const recruitments = [
    {
        title: "プロジェクトX",
        tags: ["フロントエンド", "UI/UX", "モバイルアプリ"],
        description: "革新的なモバイルアプリケーションの開発チームを募集しています。React Nativeの経験がある方を歓迎します。",
        img: "/sample.webp",
        link: "/recruitments/project-x"
    },
    {
        title: "スタートアップY",
        tags: ["バックエンド", "クラウド", "DevOps"],
        description: "AWSとDockerを使用したマイクロサービスアーキテクチャの構築に携わっていただけるエンジニアを募集。",
        img: "/sample.webp",
        link: "/recruitments/startup-y"
    },
    {
        title: "チームZ",
        tags: ["AI/ML", "データサイエンス", "Python"],
        description: "機械学習モデルの開発と実装に携わるデータサイエンティストを募集。TensorFlowの経験がある方を歓迎。",
        img: "/sample.webp",
        link: "/recruitments/team-z"
    },
    {
        title: "プロジェクトW",
        tags: ["フルスタック", "TypeScript", "GraphQL"],
        description: "モダンなWebアプリケーション開発チームに参加しませんか？Next.jsとGraphQLの経験がある方を歓迎します。",
        img: "/sample.webp",
        link: "/recruitments/project-w"
    }
]

export default function Page() {
  return (
    <main className="min-h-screen pt-25">
        <div className="items-center justify-center flex">
            <Input 
                placeholder="募集を探す"
                className="w-1/2 lg:w-1/3"
            />
            <Button className="ml-2">募集を探す</Button>
        </div>
        <div className="flex items-center justify-center mt-20 container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {recruitments.map((recruitment, index) => (
                    <Card key={index} {...recruitment} />
                ))}
            </div>
        </div>

    </main>
  )
}