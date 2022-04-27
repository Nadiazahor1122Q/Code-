import React from 'react';

const News = () => {
    return <div>
        <div className="news scrollElement slideUp">
  <h2>News</h2>
  <div className="news_grid">
    <div className="news_grid_block" id="latest_news_1">
      {" "}
      <a href="https://blog.blockstream.com/blockstream-2021-towards-hyperbitcoinization/">
        {" "}
        <img
          src="/img/blog/2022-01-13/20220113_a_year_in_review_announcement_1920x1080px.png"
          alt="Blockstream 2021: Towards Hyperbitcoinization"
        />{" "}
      </a>
      <h4>
        <a href="https://blog.blockstream.com/blockstream-2021-towards-hyperbitcoinization/">
          Blockstream 2021: Towards Hyperbitcoinization
        </a>
      </h4>
    </div>
    <div className="news_grid_block" id="latest_news_2">
      {" "}
      <a href="https://blog.blockstream.com/el-salvador-to-issue-1b-in-tokenized-bonds-on-the-liquid-network/">
        {" "}
        <img
          src="/img/blog/2021-11-21/20211120_liquid_el_salvador_1920x1080px.png"
          alt="El Salvador to Issue $1B in Tokenized Bonds on the Liquid Network"
        />{" "}
      </a>
      <h4>
        <a href="https://blog.blockstream.com/el-salvador-to-issue-1b-in-tokenized-bonds-on-the-liquid-network/">
          El Salvador to Issue $1B in Tokenized Bonds on the Liquid Network
        </a>
      </h4>
    </div>
    <div className="news_grid_block" id="latest_news_3">
      {" "}
      <a href="https://blog.blockstream.com/en-specter-adds-blockstream-jade-and-liquid-support/">
        {" "}
        <img
          src="/img/blog/2021-10-19/specter_blockstream.png"
          alt="Specter Adds Blockstream Jade and Liquid Support"
        />{" "}
      </a>
      <h4>
        <a href="https://blog.blockstream.com/en-specter-adds-blockstream-jade-and-liquid-support/">
          Specter Adds Blockstream Jade and Liquid Support
        </a>
      </h4>
    </div>
  </div>
</div>

    </div>
}


export default News;