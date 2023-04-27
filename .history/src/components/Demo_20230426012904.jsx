import { useState, useEffect } from "react"
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url:'',
    summary:'',
  });

  const [allArticles, setAllArticle] = useState([]);

  const [getSummary, { error, isfetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articesFromLocalStorage = JSON.parse
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });
    
    if(data?.summary) {
      const newArticle = { ...article, summary: data.summary }
      const updatedAllArticles = [newArticle, ...allArticles];


      setArticle(newArticle);
      setAllArticle(updatedAllArticles)
    }
  };

  return (
  <section className='mt-16 w-full max-w-xl'>
    {/* search */}
    <div className="flex flex-col w-full gap-2">
      <form
        className='relative flex justify-center items-center'
        onSubmit={handleSubmit}
      >
        <img 
          src={linkIcon}  
          alt='link-icon'
          className='absolute left-0 my-2 ml-3 w-5'
        />

        <input 
          type='url'
          placeholder='Enter a URL'
          value={article.url}
          onChange={(e) => setArticle({...article, url: e.target.value})}
          required
          className='url_input peer'
        />

        <button
          type='submit'
          className="submit_btn
          peer-focus:border-gray-700
          peer-focus:text-gray-700"
        >
          ↵
        </button>
      </form>

      {/* Browse Url History */}



    </div>

    {/* Display Results */}
  </section>
  )
}

export default Demo
