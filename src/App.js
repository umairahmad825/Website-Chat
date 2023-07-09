import React from 'react';
import './App.css';
import {Arrow1}  from './icons/Arrow1/Arrow1';
import { BellOff } from './icons/Belloff/Belloff';
import {Profile} from './icons/Profile/Profile';
import { Bookmark } from './icons/Bookmark/Bookmark';
import { Heart } from './icons/Heart/Heart';
import { Comments } from './icons/Comments/Comments';
import { Options } from './icons/Options/Options';
import { Profile2 } from './icons/Profile2/Profile2';

function App() {
  return (
    <div className="p-main">
      <div className="p-center">
          {/*Navbar starts */}
          <div className="p-navbar">
          <div className="p-text">자유톡</div>
          <BellOff className='p-bell-off'/>
          <Arrow1 className="p-arrow" />
        </div>
              {/*Navbar end */}
              {/*header part start */}
                <div className="p-header">
                  <div className="p-leftarea">
              <img
                className="p-image"
                alt="Group"
                src="https://generation-sessions.s3.amazonaws.com/45c94c0529e80065d3f17bd741f5501b/img/group-26086686.png"
              />
              <div className="p-top-frame">
                <div className="com-frame1">
                  <div className="p-com-text-1">안녕 나 응애</div>
                  <Profile className="p-profile" />
                  <div className="p-text-2">1일전</div>
                </div>
                <div className="com-frame1">
                  <div className="com-text">165cm</div>
                  <div className="p-ellipse" />
                  <div className="com-text">53kg</div>
                </div>
              </div>
            </div>
                  <div className='p-rightarea'>
                  <button type='button' className='p-button'>팔로우</button>
                  </div>
                </div>
              {/*header part end */}

              {/*Description Part */}
              <div className="p-description">
                  <div className="p-external">
                    <p className="p-com-text-1">지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?</p>
                    <div className="p-internal">
                      <div className="text">
                        <span className="span">
                          지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
                          <br />
                        </span>
                      </div>
                        <div className="text">
                          <span className="span">
                            혹시 어떤 상품이 제일 괜찮았어? <br />
                          </span>
                        </div>
                        <div className="text">
                          <span className="span">
                            <br />
                          </span>
                        </div>
                        <div className="text">
                          <span className="span">
                            후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 <br />
                          </span>
                        </div>
                        <div className="text">
                          <span className="span">
                            제일 재밌었다던데 맞아???
                            <br />
                          </span>
                        </div>
                        <div className="text">
                          <span className="span">
                            <br />
                          </span>
                        </div>
                        <div className="text">
                          <span className="span">
                            올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
                            <br />
                          </span>
                        </div>
                        <div className="text">
                          <span className="span">
                            아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
                            <br />
                          </span>
                        </div>
                        <div className="text">
                          <span className="span">있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!</span>
                        </div>
                      </div>
                      <div className="p-tag-section">
                        <div className="p-com-tagrow">
                          <div className="p-com-tag">
                            <div className="p-com-tag-text">#2023</div>
                          </div>
                          <div className="p-com-tag">
                            <div className="p-com-tag-text">#TODAYISMONDAY</div>
                          </div>
                          <div className="p-com-tag">
                            <div className="p-com-tag-text">#TOP</div>
                          </div>
                          <div className="p-com-tag">
                            <div className="p-com-tag-text">#POPS!</div>
                          </div>
                        </div>
                        <div className="p-com-tagrow">
                          <div className="p-com-tag">
                            <div className="p-com-tag-text">#WOW</div>
                          </div>
                          <div className="p-com-tag">
                            <div className="p-com-tag-text">#ROW</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                      {/*Description Part end */}

                      {/*Image section starts*/}
                      <div className="p-postimage">
                          <img
                            className="p-imagesmode"
                            alt="Imagesmode"
                            src="https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg"
                          />
                          <img
                            className="p-img"
                            alt="Group"
                            src="https://generation-sessions.s3.amazonaws.com/45c94c0529e80065d3f17bd741f5501b/img/group-26086726@2x.png"
                          />
                          <div className="p-social" />
                          <div className="p-frame-8">
                              <div className="p-frame-9">
                                <Heart className="p-icon-instance-node" />
                                <div className="p-com-text-2">5</div>
                              </div>
                              <div className="p-frame-9">
                                <Comments className="icon-instance-node" />
                                <div className="p-com-text-2">5</div>
                              </div>
                              <Bookmark className="p-icon-instance-node" />
                              <Options className="frame-26086651" />

                            </div>
                        </div>
                        
                      
                      {/*Image section end*/}
                      <div className="p-divider" />
                    {/*Image comment section */}
                      <div className="p-comments">
                        <div className="p-left">
                          <div className="p-pimage">
                            <div className="p-imagefill" />
                          </div>
                        </div>
                        <div className="p-frame-6">
                          <div className="p-frame-7">
                            <div className="p-text-wrapper-3">안녕 나 응애</div>
                            <Profile2 className="p-profile2" />
                            <div className="p-text-wrapper-4">1일전</div>
                          </div>
                        </div>
                        <div className="p-option2">
                            <div className="p-ellipse-5" />
                            <div className="p-ellipse-6" />
                            <div className="p-ellipse-7" />
                          </div>
                          
                      </div>
                      {/*Image comment end */}
                      {/*Comment area start */}
                      <div className="p-commentarea">
                      <div className="p-com-span">
                            <span className="p-com-text3">
                              어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 <br />
                            </span>
                          </div>
                          <div className="p-com-span">
                            <span className="p-com-text3">
                              우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
                              <br />
                            </span>
                          </div>
                          <div className="p-com-span">
                            <span className="p-com-text3">
                              아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
                              <br />
                            </span>
                          </div>
                          <div className="p-com-span">
                            <span className="p-com-text3">
                              괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
                              <br />
                            </span>
                          </div>
                          <div className="p-com-span">
                            <span className="p-com-text3">꼭 봐주세용~!</span>
                          </div>
                        </div>
                      {/*Commect area end */}

                   {/*Social Icons */} 
                   <div className='p-social'>
                   <div className="p-frame-11" />
                          <div className="p-frame-8">
                              <div className="p-frame-9">
                                <Heart className="p-icon-instance-node" />
                                <div className="p-com-text-2">5</div>
                              </div>
                              <div className="p-frame-9">
                                <Comments className="p-icon-instance-node" />
                                <div className="p-com-text-2">5</div>
                              </div>

                            </div>

                    </div>  
                   {/*Social Icons ends*/} 
                   {/* */} 
                   <div className="p-frame-15">
                      <div className="p-group-3">
                        <div className="p-class">
                          <div className="p-group-8" />
                        </div>
                      </div>
                      <div className="p-frame-16">
                        <div className="p-frame-17">
                          <div className="p-text-wrapper-3">ㅇㅅㅇ</div>
                          <div className="p-text-wrapper-4">1일전</div>
                        </div>
                      </div>
                      <div className="p-option3">
                            <div className="p-ellipse-8" />
                            <div className="p-ellipse-9" />
                            <div className="p-ellipse-10" />
                          </div>
                    </div>
                    {/* */}
                    {/*Comment area start */}
                    <div className="p-commentarea1">
                      <div className="p-com-span">
                            <span className="p-com-text3">
                            오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다 <br />
                            </span>
                          </div>

                        </div>
                        {/*Comment area end */}
                        {/*Social Icons */} 
                          <div className='p-social1'>
                          <div className="p-frame-18" />
                                  <div className="p-frame-19">
                                      <div className="p-frame-20">
                                          <Heart className="p-icon-instance-node" />
                                          <div className="p-com-text-2">5</div>
                                        </div>

                                    </div>
                            </div>  
                          {/*Social Icons ends*/} 

                          <div className="frame-21">
                            <img
                              className="imagesmode-2"
                              alt="Imagesmode"
                              src="https://generation-sessions.s3.amazonaws.com/45c94c0529e80065d3f17bd741f5501b/img/imagesmode@2x.png"
                            />
                            <input type="text" className ='p-input' placeholder='댓글을 남겨주세요.' />
                            <div className="text-wrapper-10"><a href='#'>등록</a></div>
                          </div>
                          </div>
                        </div>
  );
}

export default App;
