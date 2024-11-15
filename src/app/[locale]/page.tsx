import PageComponent from "./PageComponent";
import {unstable_setRequestLocale} from 'next-intl/server';
import {randomVideo} from "~/data/openaiVideo";
import {getNavMenu,getIndexLanguageText, getQuestionLanguageText, getFeatureLanguageText, getPlayInfoLanguageText,getTestimonialInfos} from "~/configs/languageText";

export default async function IndexPage({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const indexLanguageText = await getIndexLanguageText();
  const indexPlayInfoText = await getPlayInfoLanguageText();

  const indexTestimonialText = await getTestimonialInfos();

  const questionText = await getQuestionLanguageText();
  const featureText = await getFeatureLanguageText();

  const initVideoList = randomVideo(2);
  const navMenuText = await getNavMenu();

  return (
    <PageComponent
      locale={locale}
      indexTestimonialText={indexTestimonialText}
      indexPlayInfoText={indexPlayInfoText}
      navMenuText={navMenuText}
      indexLanguageText={indexLanguageText}
      indexFeatureText={featureText}
      initVideoList={initVideoList}
      questionText={questionText}
    >

    </PageComponent>
  )
}
