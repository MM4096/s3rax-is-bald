import {Quote} from "@/app/quotes/components/quote";
import {FadeIn} from "@/app/components/fadeIn";

export default function AboutPage() {
	return (<>
		<h1>Quotes From Minevane members on s3rax</h1>
		<div className="mb-4"/>
		<div className="block items-center text-center grow overflow-y-auto w-full">

			<FadeIn fadeTime={2000} timeBetweenFades={300}>
				<Quote author="TheRealBigBeard"> bald</Quote>
				<Quote author="ProPlebNZ">Call him megamind, he likes it.</Quote>
				{/*<Quote author="MM4096">wb bald dude!</Quote>*/}
				<Quote author="s3rax" context="In response to bald allegations">I&apos;m not bald.</Quote>
				<Quote author="s3rax" context="Further in response to bald allegations">I&apos;m not bald you little
					shit</Quote>
				<Quote author="Codzsters" context="With literally zero context">S3 is bald</Quote>
				<Quote author="Codzsters">If s3 = bald, and bald = old. Therefore old = s3</Quote>
				<Quote author="yeetcraft12, 8matt8goesviral, Codzsters">@s3rax baldy bring back the bread</Quote>
			</FadeIn>
		</div>
	</>)
}