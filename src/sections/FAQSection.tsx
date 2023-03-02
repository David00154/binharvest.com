import { Fragment, useState, FC } from 'react'

const faqs = [
    {
        title: "What is the best way to start investing for beginners? ",
        content: "The best way for beginners to start investing is to research and educate themselves on different investment options and strategies. It's also recommended to start with small investments and gradually increase as you gain experience and confidence.",
    },
    {
        title: "What is a stock market index? ",
        content: "A stock market index is a measure of the overall performance of a group of stocks. It tracks the performance of a specific set of stocks and provides a benchmark for investors to compare the performance of their own investments.",
    },
    {
        title: "What is diversification in investment? ",
        content: "Diversification is a strategy where investors spread their money across different investment types and sectors to reduce risk. This helps to protect the portfolio from market volatility and can potentially increase returns.",
    },

    {
        title: "What is the difference between a market order and a limit order? ",
        content: "A market order is an order to buy or sell a security at the best available price in the market, while a limit order is an order to buy or sell a security at a specified price or better.",
    },
    {
        title: " What are the risks of investing in the stock market? ",
        content: "The risks of investing in the stock market include market volatility, economic uncertainty, company-specific risks, and geopolitical risks. It's important for investors to assess and manage these risks before making any investment decisions.",
    },
    {
        title: "How can I determine my risk tolerance for investing? ",
        content: "To determine your risk tolerance, you should consider your financial goals, investment time horizon, and your ability to handle market fluctuations. You can also take risk tolerance questionnaires or consult with a financial advisor to help you determine your risk tolerance.",
    },
]

const FAQSection: FC<{ showHeader?: boolean }> = ({ showHeader = true }) => {
    let right = faqs.splice(0, (faqs.length / 2))
    let left = faqs
    const [column1, setColumn1] = useState<Array<any>>(right)
    const [column2, setColumn2] = useState<Array<any>>(left)
    return (
        <Fragment>
            <section className='faq-section'>

                <div className="faq-section-heading">
                    <p
                        className="uppercase text-custom-orange text-[14px] font-medium m-0 leading-[1.1] tracking-[.2em] relative top-[-1px] after:content-['||'] after:relative after:mr-[6px] after:text-[10px] after:top-[-1px] before:content-['||'] before:relative before:ml-[6px] before:text-[10px] before:top-[-1px]"
                    >
                        our most asked questions
                    </p>
                    {showHeader && (
                        <h2>FAQs</h2>
                    )}
                </div>
                <div className="faq-section-container">
                    {/* 1 */}
                    <div className="faq-section-column">
                        <div className='faq-section-column-wrap'>
                            <div className='faq-section-column-wrap-inner'>
                                <div className='faq-section-column-wrap-inner-container'>
                                    <ul className="faq-items">
                                        {column1.map((item, index) => (
                                            <li tabIndex={index} key={index} className={`faq-item daisy-collapse group daisy-collapse-plus`}>
                                                <input type="checkbox" className='peer' />
                                                <div className="faq-item-title daisy-collapse-title group-focus:text-custom-orange flex items-center">
                                                    <h4>{item.title}
                                                    </h4>
                                                    <svg className='ml-auto group-focus:hidden inline-block' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z" /></svg>
                                                    <svg className='ml-auto group-focus:inline-block hidden' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998H5v-2h14z" /></svg>
                                                </div>
                                                <div className="faq-item-content daisy-collapse-content">
                                                    <div className="inner">
                                                        <p>{item.content}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="faq-section-column">
                        <div className='faq-section-column-wrap'>
                            <div className='faq-section-column-wrap-inner'>
                                <div className='faq-section-column-wrap-inner-container'>
                                    <ul className="faq-items">
                                        {column2.map((item, index) => (
                                            <li tabIndex={index} key={index} className={'faq-item daisy-collapse group daisy-collapse-plus column-2'}>
                                                <input type="checkbox" className='peer' />
                                                <div className="faq-item-title daisy-collapse-title group-focus:text-custom-orange flex items-center">
                                                    <h4>{item.title}
                                                    </h4>
                                                    <svg className='ml-auto group-focus:hidden inline-block' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z" /></svg>
                                                    <svg className='ml-auto group-focus:inline-block hidden' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998H5v-2h14z" /></svg>
                                                </div>
                                                <div className="faq-item-content daisy-collapse-content">
                                                    <div className="inner">
                                                        <p>{item.content}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* @ts-ignore */}
            <style jsx>{`
                .daisy-collapse:focus{
                    outline: none;
                }
                .faq-section{
                    padding: 120px 0;
                    position: relative;
                }
                .faq-section-heading{
                    margin: 0 0 30px;
                    display: block;
                    text-align: center;
                    {/* display: flex;
                    justify-content: center; */}
                    {/* align-items: center; */}
                }
                .faq-section-heading h2{
                    margin: 0;
                    font-weight: 700;
                    font-size: 35px;
                    line-height: 1.2em;
                    color: #1c1c27;
                    position: relative;
                    bottom: -10px;
                    margin-bottom: 50px;
                }
                @media (min-width:768px) {
                    .faq-section-heading h2{
                        font-size: 40px;
                    }
                }
                @media (min-width:992px) {
                    .faq-section-heading h2{
                        font-size: 45px;
                    }
                }
                .faq-section-container{
                    max-width: 1200px;
                    display: flex;
                    margin: 0 auto;
                    position: relative;
                }
                .faq-section-column{
                    position: relative;
                    min-height: 1px;
                    display: flex;   
                }
                .faq-section-column-wrap{
                    padding: 0 15px;
                    display: flex;
                    position: relative;
                    width: 100%;
                    flex-wrap: wrap;
                    align-content: flex-start;
                }
                .faq-section-column-wrap-inner{
                    width: 100%;
                    position: relative;
                }
                .faq-section-column-wrap-inner-container{
                    transition: background .3s,border .3s,border-radius .3s,box-shadow .3s,transform .4s;
                }
                .faq-item.active{
                    box-shadow: 0px 10px 60px 0px rgb(0 0 0 / 7%);
                }
                .faq-item+.faq-item{
                    margin-top: 20px;
                }
                .faq-item{
                    border: 1px solid #e7e1dc;
                    transition: all .5s ease;
                }
                .faq-item-title{
                    position: relative;
                    padding-left: 40px;
                    padding-right: 40px;
                    padding-top: 26.5px;
                    padding-bottom: 27px;
                    cursor: pointer;
                }
                .faq-item.active .faq-item-title h4{
                    color: theme(colors.custom-orange);
                    
                }
                .faq-item-title h4{
                    position: relative;
                    margin: 0;
                    color: #1c1c27;
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 1.2em;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all .5s ease;
                }
                .faq-item-title span.accrodion-icon{
                    position: relative;
                    height: 12px;
                    width: 12px;
                }
                .faq-item-title span.accrodion-icon:after, span.accrodion-icon:before{
                    content: "";
                    width: 12px;
                    height: 2px;
                    background-color: #1c1c27;
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    transition: background .5s ease,opacity .5s ease;
                    opacity: 1;
                }
                .faq-item-title span.accrodion-icon:after{
                    transform: translate(-50%,-50%) rotate(90deg);
                }
                .faq-item-title span.accrodion-icon::before{
                    background-color: theme(colors.custom-orange);
                }
                {/* .faq-item.active .faq-item-content{
                    display: inline-block;
                } */}
                .faq-item-content {
                    padding: 0 40px;
                    transition: all .5s ease;

                }
                .faq-item-content p{
                    padding-bottom: 31px;
                    font-size: 16px;
                    line-height: 1.875;
                    margin: 0;
                    {/* clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); */}
                }
                @media (min-width:576px) {
                    .faq-section-column{
                        width: 50%;
                    }
                }
                @media (max-width:991px) {
                    .faq-section{
                        padding: 80px 0;
                    }
                    .faq-section-container{
                        flex-wrap: wrap;
                    }
                    .column-2:nth-child(1){
                        margin-top: 20px;
                    }
                }
                
            `}</style>
        </Fragment>
    )
}

export default FAQSection