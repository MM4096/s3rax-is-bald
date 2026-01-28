import {FadeIn} from "@/app/components/fadeIn";
import {BackButton} from "@/app/components/backButton";

export default function PoemPage() {
	const POEM: string = `S3 strolls in with a polished head,
Looking like a lightbulb right out of bed.
No hair, no flair, just skin so bare,
Even mirrors say, “bro, that’s unfair.”

Ain’t no part, no fade, no curl,
Just straight up scalp for all the world.
His barber quit, no job to do,
Just wiped his dome and said, “[we’re] through.”

Shiny like a bowling ball,
Birds mistake him for a mall.
“Land here?” They think, “[it’s] smooth and wide!”,
S3 just sighs and swats with pride.

He don’t need no shampoo shelf,
Head so slick, it cleans itself.
But wear a hat? That thing might slide,
His scalp’s got zero grip or pride.

Still he owns it, chrome with class,
No hair? No problem[,] just sass and gas.
So laugh with him, not at his head,
He’s got more shine than brains instead.`

	const PARAGRAPHS = POEM.split("\n\n");
	const PARAGRAPH_ELEMS = PARAGRAPHS.map((paragraph, idx) => {
		return <p key={idx}
				  dangerouslySetInnerHTML={{__html: paragraph.replaceAll("\n", "<br/>") + "<div class='mb-2'/>"}}
				  className="text-left w-full"/>
	})

	return (<div className="w-max h-full pt-5">
		<FadeIn fadeTime={2000} timeBetweenFades={300}>
			<div>
				<div className="flex flex-row gap-2">
					<BackButton/>
					<h1>s3rax the Bald</h1>
				</div>
				<h2>A poem by <i>TheRealBigBeard</i></h2>
			</div>
			<br/>
			{
				PARAGRAPH_ELEMS
			}
		</FadeIn>

		<pre className="opacity-0 h-0 max-h-0">
			{POEM}
		</pre>
	</div>)
}