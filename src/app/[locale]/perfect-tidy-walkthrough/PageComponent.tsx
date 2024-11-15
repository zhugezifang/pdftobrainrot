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
              <div className="mb-5 lg:mb-8">
                <p className="text-[#7c8aaa] text-xl">{indexLanguageText.pDescription}</p>
              </div>

            </div>

            <iframe width="1228" height="691" src="https://www.youtube.com/embed/oNAOqsIDzU0?si=2_4371tBstr73wa9" title="Perfect Tidy Walkthrough(攻略) Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

            <section id="perfecttidylevel" className="bg-indigo-100 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">{indexLanguageText.h1Text}</h2>
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
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      7</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      8</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      9</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      10</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      11</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      12</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      13</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      14</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      15</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      16</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      17</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      18</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      19</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      20</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      21</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      22</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      23</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      24</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      25</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      26</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      27</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      28</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      29</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      30</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      31</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      32</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      33</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      34</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      35</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      36</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      37</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      38</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      39</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      40</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      41</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      42</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      43</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      44</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      45</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      46</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      47</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      48</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      49</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      50</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      51</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      52</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      53</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      54</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      55</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      56</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      57</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      58</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      59</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      60</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      61</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      62</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      63</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      64</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      65</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      66</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      67</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      68</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      69</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      70</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      71</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      72</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      73</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      74</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      75</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      76</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      77</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      78</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      79</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      80</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      81</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      82</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      83</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      84</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      85</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      86</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      87</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      88</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      89</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      90</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      91</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      92</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      93</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      94</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      95</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      96</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      97</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      98</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      99</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      100</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      101</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      102</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      103</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      104</p></div>
                  <div className="bg-white p-2 rounded-lg shadow-md text-center">
                    <p className="text-xs font-semibold text-indigo-600 whitespace-nowrap overflow-hidden text-ellipsis">Perfect Tidy Level
                      105</p></div>
                </div>
              </div>
            </section>
  
            <div id="faq">
              <section>
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-20">
                  <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
                    <h2 className="text-3xl lg:text-3xl font-bold text-black">{questionText.h2_0}</h2>
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
