import {Category} from '@/components/ui/category'
import {Card} from '@/components/ui/card'
import categories from './mock'

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <Card className="w-[500px] flex flex-wrap items-start gap-2 p-6">
                {categories.map((category) => (
                    <Category key={category.id} {...category}>
                        {category.subCategories?.map((subCategory) => (
                            <Category key={subCategory.id} {...subCategory} />
                        ))}
                    </Category>
                ))}
            </Card>
        </main>
    )
}
