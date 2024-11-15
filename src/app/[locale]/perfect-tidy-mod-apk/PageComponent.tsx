'use client'
import {useRouter} from "next/navigation";
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import {useState} from "react";
import HeadInfo from "~/components/HeadInfo";
import {useInterval} from "ahooks";
import Link from "next/link";

const PageComponent = ({
                         locale = '',
                         navMenuText,
                         indexLanguageText,
                         questionText
                       }) => {
  const router = useRouter();

  const [videoHistoryList, setVideoHistoryList] = useState([]);
  const [intervalLocalStorage, setIntervalLocalStorage] = useState(500);

  useInterval(() => {
    const videoHistoryListStr = localStorage.getItem('videoHistoryList');
    if (videoHistoryListStr) {
      const videoHistoryList = JSON.parse(videoHistoryListStr);
      setVideoHistoryList(videoHistoryList)
    } else {
      setVideoHistoryList([])
    }
  }, intervalLocalStorage);

  return (
    <>
      <HeadInfo
        title={indexLanguageText.title}
        description={indexLanguageText.description}
        locale={locale}
        page={"/perfect-tidy-mod-apk"}
      />
      <Header locale={locale} navMenuText={navMenuText} page={"perfect-tidy-mod-apk"} indexLanguageText={indexLanguageText}/>
      <div className={"my-auto"}>
        <div className="block overflow-hidden bg-cover bg-center"
             style={{backgroundImage: 'https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg'}}>
          <div className="mx-auto w-full max-w-7xl px-5 mb-5">
            
            <div
              className="mx-auto flex max-w-4xl flex-col items-center text-center pt-10">
              <h1 className="mb-4 text-4xl font-bold md:text-4xl">{indexLanguageText.h1Text}</h1>

            </div>


            <div id="faq">
              <section>
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-2 md:px-10 md:py-2">
                  
                  <div className="mt-10 flex w-full flex-col">
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{indexLanguageText.h2_1}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{indexLanguageText.h2_1_p1}<a href="https://apps.apple.com/us/app/perfect-tidy/id6689516283" className="text-blue-600 font-bold" target="_blank">ios apk download</a></p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{indexLanguageText.h2_2}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{indexLanguageText.h2_2_p1}<a href="https://play.google.com/store/apps/details?id=com.abi.perfect.tidy&hl=en&pli=1" className="text-blue-600 font-bold" target="_blank">android apk download</a></p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{indexLanguageText.h2_3}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{indexLanguageText.h2_3_p1}<a href="https://perfect-tidy.online/" className="text-blue-600 font-bold" target="_blank">perfect tidy online</a></p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    
                  </div>
                </div>
              </section>
            </div>
            
          </div>
        </div>
      </div>
      <Footer
        locale={locale}
        description={indexLanguageText.description}
      />
    </>
  )


}
export default PageComponent
