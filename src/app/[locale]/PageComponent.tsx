'use client'
import {useRouter} from "next/navigation";
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import {useState} from "react";
import {randomVideo} from "~/data/openaiVideo";
import HeadInfo from "~/components/HeadInfo";
import ImageSplitter from "~/components/ImageSplitter";
import {useCommonContext} from "~/context/common-context";

const PageComponent = ({
                         locale = '',
                         indexTestimonialText,
                         indexPlayInfoText,
                         navMenuText,
                         indexLanguageText,
                         indexFeatureText,
                         initVideoList = [],
                         questionText
                       }) => {
  const router = useRouter();

  const [textStr, setTextStr] = useState('');
  const {setShowGeneratingModal, setShowLoadingModal} = useCommonContext();


  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setChooseAPI('FakeSora');
    if (!textStr) {
      setVideoList(randomVideo(2));
      return;
    }
    setShowGeneratingModal(true);
    const body = {
      prompt: textStr
    };
    const response = await fetch(`/${locale}/api/generate`, {
      method: 'POST',
      body: JSON.stringify(body)
    })
    const result = await response.json();
    setShowGeneratingModal(false);
    if (result.data) {
      if (!result.data[0].revised_prompt) {
        return
      }
      const video = {
        revised_prompt: result.data[0].revised_prompt,
        url: result.data[0].url
      }

      // add storage
      const videoHistoryListStr = localStorage.getItem('videoHistoryList');
      if (!videoHistoryListStr) {
        const videoHistoryList = [];
        videoHistoryList.unshift(video);
        localStorage.setItem('videoHistoryList', JSON.stringify(videoHistoryList));
      } else {
        const videoHistoryList = JSON.parse(videoHistoryListStr);
        // check exist
        let exist = false;
        for (let i = 0; i < videoHistoryList.length; i++) {
          const videoHistory = videoHistoryList[i];
          if (videoHistory.revised_prompt == video.revised_prompt) {
            exist = true;
            localStorage.setItem('video', JSON.stringify(video));
            router.push(`/${locale}/playground`)
            return;
          }
        }
        if (!exist) {
          videoHistoryList.unshift(video);
          // const newList = videoHistoryList.slice(0, 3);
          localStorage.setItem('videoHistoryList', JSON.stringify(videoHistoryList));
        }
      }
      localStorage.setItem('video', JSON.stringify(video));
      router.push(`/${locale}/playground`)
    }
  }

  const [videoList, setVideoList] = useState(initVideoList);

  const handleMouseEnter = (event) => {
    event.target.play();
  };

  const handleMouseLeave = (event) => {
    event.target.pause();
  };

  const [chooseAPI, setChooseAPI] = useState('FakeSora');

  return (
    <>
      <HeadInfo
        title={indexLanguageText.title}
        description={indexLanguageText.description}
        locale={locale}
        page={""}
      />
      <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-KBVHH6SP3N`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KBVHH6SP3N');
            `,
          }}
        />
      <Header locale={locale} navMenuText={navMenuText} indexLanguageText={indexLanguageText}/>
      <div>
        <div className="block overflow-hidden bg-cover bg-center text-black"
             style={{backgroundImage: 'https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg'}}>
          <div className="mx-auto w-full max-w-7xl px-5 mb-5">
            <div
              className="mx-auto flex max-w-4xl flex-col items-center text-center pt-10">
              <h1 className="mb-4 text-4xl font-bold md:text-4xl">{indexLanguageText.h1Text}</h1>
              <div className="mb-5 lg:mb-8">
                <p className="text-[#7c8aaa] text-xl">{indexLanguageText.pDescription}</p>
              </div>

            </div>

            <div
                className={"w-[90%] mx-auto mb-8 border-[2px] border-gray-200 object-fill"}>
                <ImageSplitter locale={locale} indexLanguageText={indexLanguageText}/>
            </div>

            <section id="how-it-works" className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{indexPlayInfoText.h2_0}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-play w-12 h-12 text-indigo-600">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{indexPlayInfoText.h2_1}</h3>
                    <p className="text-gray-600 text-center">{indexPlayInfoText.h2_1_p1}</p></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mouse-pointer w-12 h-12 text-indigo-600">
                        <path d="M12.586 12.586 19 19"></path>
                        <path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{indexPlayInfoText.h2_2}</h3>
                    <p className="text-gray-600 text-center">{indexPlayInfoText.h2_2_p1}</p></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move w-12 h-12 text-indigo-600">
                        <path d="M12 2v20"></path>
                        <path d="m15 19-3 3-3-3"></path>
                        <path d="m19 9 3 3-3 3"></path>
                        <path d="M2 12h20"></path>
                        <path d="m5 9-3 3 3 3"></path>
                        <path d="m9 5 3-3 3 3"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{indexPlayInfoText.h2_3}</h3>
                    <p className="text-gray-600 text-center">{indexPlayInfoText.h2_3_p1}</p></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-12 h-12 text-indigo-600">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{indexPlayInfoText.h2_4}</h3>
                    <p className="text-gray-600 text-center">{indexPlayInfoText.h2_4_p1}</p></div>
                </div>
              </div>
            </section>

            <div className="max-w-4xl mx-auto p-4">
              <h2 className="text-3xl font-semibold text-center mb-8">{indexLanguageText.img_h2}</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src="https://perfecttidygame.com/assets/images/perfect-tidy-006.webp" alt="Perfect Tidy Image 1" className="w-full h-auto object-cover"/>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src="https://perfecttidygame.com/assets/images/perfect-tidy-002.webp" alt="Perfect Tidy Image 2" className="w-full h-auto object-cover"/>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src="https://perfecttidygame.com/assets/images/perfect-tidy-001.webp" alt="Perfect Tidy Image 3" className="w-full h-auto object-cover"/>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src="https://perfecttidygame.com/assets/images/perfect-tidy-005.webp" alt="Perfect Tidy Image 4" className="w-full h-auto object-cover"/>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src="https://perfecttidy.online/_next/image?url=%2Fimages%2Fperfect-tidy-carousel-1.webp&w=640&q=75" alt="Perfect Tidy Image 5" className="w-full h-auto object-cover"/>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src="https://perfecttidy.online/_next/image?url=%2Fimages%2Fperfect-tidy-carousel-13.webp&w=640&q=75" alt="Perfect Tidy Image 6" className="w-full h-auto object-cover"/>
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src="https://perfecttidy.online/_next/image?url=%2Fimages%2Fperfect-tidy-carousel-16.webp&w=640&q=75" alt="Gallery Image" className="w-full h-auto object-cover"/>
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src="https://perfecttidy.online/_next/image?url=%2Fimages%2Fperfect-tidy-carousel-9.webp&w=640&q=75" alt="Gallery Image" className="w-full h-auto object-cover"/>
                </div>

                
              </div>
            </div>

            <section id="perfecttidylevel" className="bg-indigo-100 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">{indexLanguageText.level_h2}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      1</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      2</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      3</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      4</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      5</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      6</p></div>
                </div>
                <div className="text-center mt-8">
                  <a className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-indigo-700 transition duration-300" href={`/${locale}/perfect-tidy-walkthrough`}>{indexLanguageText.more_level}
                  <span className="font-bold text-yellow-300">Lever 1 to 115</span></a>
                </div>
              </div>
            </section>
            
            <section className="py-8 md:py-12 lg:py-16">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{indexFeatureText.h2_0}</h2>
                </div>
                <div className="px-5 py-6 mt-8 bg-white lg:mt-12 lg:p-12">
                  <div className="grid grid-cols-1 gap-8 lg:gap-12 sm:grid-cols-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_1}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_1_p1}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_2}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_2_p1}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_3}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_3_p1}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_4}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_4_p1}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_5}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_5_p1}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-8 w-8 text-blue-600">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-black">{indexFeatureText.h2_6}</h3>
                        <p className="mt-2 text-base text-gray-600">{indexFeatureText.h2_6_p1}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="testimonials" className="py-16 bg-indigo-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{indexTestimonialText.h2_0}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-center mb-4">
                    {indexTestimonialText.h2_1_p1}                      
                    </p>
                    <p className="text-gray-800 font-semibold">Sarah J.</p></div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-gray-300">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-center mb-4">
                    {indexTestimonialText.h2_2_p1}                              </p>
                    <p className="text-gray-800 font-semibold">Mike T.</p></div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-center mb-4">
                    {indexTestimonialText.h2_3_p1}                            </p>
                    <p className="text-gray-800 font-semibold">Emily R.</p></div>
                </div>
              </div>
            </section>


            <div id="faq">
              <section>
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-20">
                  <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
                    <h2 className="text-3xl lg:text-5xl font-bold text-black">{questionText.h2_0}</h2>
                  </div>
                  <div className="mt-10 flex w-full flex-col">
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_1}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_1_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_2}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_2_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_3}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_3_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_4}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_4_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_5}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_5_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_6}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_6_p1}</p>
                      </div>
                    </div>
                    <div className="mr-4 ml-8 border border-gray-200"></div>
                    <div className="relative my-3 w-full rounded-md px-6 py-8">
                      <div className="max-w-full">
                        <h3 className="text-xl font-bold text-black mb-4">{questionText.h2_7}</h3>
                        <p className="font-inter text-base font-light text-gray-500 text-justify">{questionText.h2_7_p1}</p>
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
