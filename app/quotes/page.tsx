import {Quote} from "@/app/quotes/components/quote";
import {FadeIn} from "@/app/components/fadeIn";
import {BackButton} from "@/app/components/backButton";

export default function AboutPage() {
	return (<>
		<div className="block items-center text-center grow overflow-y-auto w-1/2">
			<FadeIn fadeTime={2000} timeBetweenFades={300}>
				<div className="pt-5 pb-5 text-left">
					<div className="flex flex-row gap-2">
						<BackButton/>
						<h1>About s3rax</h1>
					</div>
					<h2>From Minevane members</h2>
				</div>
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