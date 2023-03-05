
import React, { useContext,useState,useEffect } from 'react'
import { ApiContext } from '../../context/ApiContext'
// import UsersContext from "../store/users-context";
const detail= () => {
  // const usersCtx = useContext(UsersContext);
  return (
   
    <div className="tab-pane active " id="tabv1-1" role="tabpanel" aria-labelledby="tabv1-1-tab">
    <div className="bg-body-tertiary p-3 rounded-2">
        <a className="copyboard btn d-block font-14px bg-transparent p-0 text-end text-info MetaLinkBold border-0 linkStyle2"
         data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" >
            Add Attack Momentum to your website!
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#1d7cd8" className="sc-bYMpWt ckMVqk">
                <path d="M12.6 4.5 8 9.1 3.4 4.5 2 5.9l6 6 6-6z" ml="xs" fill="#1d7cd8"></path>
            </svg>
        </a>
        <div className="collapse" id="collapseExample">
            <div className="card card-body mt-2 p-1" style={{backgroundColor: '#e5e9ef66'}}>
                <input type="text" className=" bg-transparent border-0 font-12px pe-6 inputStyle" readonly 
                 
                value='<iframe width="100%" height="206" src="https://www.sofascore.com/event/10652685/attack-momentum/embed" frameborder="0" scrolling="no"></iframe><div id="divStyle"><a href="https://www.sofascore.com/arsenal-manchester-united/KR" target="_blank" rel="noreferrer">Arsenal - Manchester United Live Score</a></div>'/>
                <svg width="24" height="24" viewBox="0 0 16 16" fill="#1d7cd8" className=" position-absolute  top-50 translate-middle-y svgStyle" >
                    <path  className ="pathStyle" d="M10.3684211,2 L4.05263158,2 C3.47368421,2 3,2.49090909 3,3.09090909 L3,10.7272727 L4.05263158,10.7272727 L4.05263158,3.09090909 L10.3684211,3.09090909 L10.3684211,2 Z M11.9473684,4.18181818 L6.15789474,4.18181818 C5.57894737,4.18181818 5.10526316,4.67272727 5.10526316,5.27272727 L5.10526316,12.9090909 C5.10526316,13.5090909 5.57894737,14 6.15789474,14 L11.9473684,14 C12.5263158,14 13,13.5090909 13,12.9090909 L13,5.27272727 C13,4.67272727 12.5263158,4.18181818 11.9473684,4.18181818 Z M11.9473684,12.9090909 L6.15789474,12.9090909 L6.15789474,5.27272727 L11.9473684,5.27272727 L11.9473684,12.9090909 Z" fill="#1d7cd8" ></path>
                </svg>
            </div>
        </div>
    </div>
    {/* <!-- who will win? --> */}
    <div className="bg-body-tertiary p-3 rounded-2 mt-2">
        <h5 className=" font-16px MetaLinkBold text-center text-capitalize mb-3">Who will win?</h5>
        <ul className=" d-flex align-items-center justify-content-between gap-2 flex-wrap">
            <li className=" flex-1"><a href="#" className=" bg-success p-2 rounded-2 text-white d-flex align-items-center justify-content-center MetaLinkBold hover-opacity-07 font-16px">1</a></li>
            <li className=" flex-1"><a href="#" className=" bg-dark-subtle p-2 rounded-2 text-white d-flex align-items-center justify-content-center MetaLinkBold hover-opacity-07 font-16px linkStyle3" >X</a></li>
            <li className=" flex-1"><a href="#" className=" bg-info p-2 rounded-2 text-white d-flex align-items-center justify-content-center MetaLinkBold hover-opacity-07 font-16px">2</a></li>
        </ul>
    </div>
    <div className="bg-body-tertiary p-3 pt-1 rounded-2 mt-2">
        <div className=" d-flex align-items-center justify-content-between">
            <span className=" font-12px">Full time</span>
            <img src="https://api.sofascore.app/api/v1/odds/provider/469/logo" style={{width: '60px'}} alt=""/>
        </div>
        <ul className=" d-flex align-items-center justify-content-between gap-2 flex-wrap mb-2">
            <li className=" flex-1"><a href="#" className=" bg-white p-1 rounded-2 text-dark d-flex align-items-center justify-content-center MetaLinkBold border hover-bg-gray listStyle" >
                    <div className="text-center font-12px">
                        <span className=" opacity-5">1</span>
                        <div className="d-flex align-items-center gap-1">
                            <svg  className="svgStyle2" width="9" height="8" viewBox="0 0 9 8" xmlns="http://www.w3.org/2000/svg" >
                                <path fill="#15B168" d="m4.27 0 4 6h-8z" fill-rule="evenodd"></path>
                            </svg>
                            1.95
                        </div>
                    </div>
                </a>
            </li>
            <li className=" flex-1"><a href="#" className=" bg-white p-1 rounded-2 text-dark d-flex align-items-center justify-content-center MetaLinkBold hover-bg-gray border">
                    <div className="text-center font-12px divStyle" >
                        <span className=" opacity-5">X</span>
                        <div className="d-flex align-items-center gap-1">
                            <svg className="svgStyle2" width="9" height="8" viewBox="0 0 9 8" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#15B168" d="m4.27 0 4 6h-8z" fill-rule="evenodd"></path>
                            </svg>
                            3.20
                        </div>
                    </div>
                </a>
            </li>
            <li className=" flex-1"><a href="#" className=" bg-white p-1 rounded-2 text-dark d-flex align-items-center justify-content-center MetaLinkBold hover-bg-gray border">
                    <div className="text-center font-12px divStyle" >
                        <span className=" opacity-5">2</span>
                        <div className="d-flex align-items-center gap-1">
                            <svg  className="svgStyle2" width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" >
                                <path fill="#C7361F" d="m4 8 4-6H0z" fill-rule="evenodd"></path>
                            </svg>
                            1.20
                        </div>
                    </div>
                </a>
            </li>

        </ul>
        <div className="d-flex align-items-center justify-content-between">
            <span className=" font-10px">Gamble responsibly 18+</span>
            <a href="#" className=" link-info font-12px">Show More</a>
        </div>
    </div>
    {/* <!-- Head 2 head --> */}
    <div className=" bg-body-tertiary p-3 rounded-2 mt-2">
        <h5 className=" font-16px MetaLinkBold text-center text-capitalize mb-3">Head 2 head</h5>
        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
            <div className=" position-relative d-flex align-items-center gap-2">
                <img src="https://api.sofascore.app/api/v1/team/42/image" style={{width: '40px', height: '40px'}} alt=""/>
                <div>
                    <h6 className=" text-success MetaLinkBold font-16px mb-1">7</h6>
                    <h6 className=" font-14px m-0">Arsenal</h6>
                </div>
                <a href="#" className=" stretched-link"></a>
            </div>
            <div className=" text-center">
                <h5 className=" font-16px opacity-5 MetaLinkBold">6</h5>
            </div>
            <div className=" position-relative d-flex align-items-center gap-2 ">
                <div className=" text-end">
                    <h6 className=" text-info MetaLinkBold font-16px mb-1">7</h6>
                    <h6 className=" font-14px m-0">Man Utd</h6>
                </div>
                <img src="https://api.sofascore.app/api/v1/team/35/image" style={{width: '40px', height: '40px'}} alt=""/>
                <a href="#" className=" stretched-link"></a>
            </div>
        </div>
    </div>
    {/* <!-- Prematch standings --> */}
    <div className=" bg-body-tertiary p-3 rounded-2 mt-2">
        <div className="table-responsive">
            <table className=" table table-borderless align-middle">
                <thead>
                    <tr>
                        <th className=" font-14px opacity-6 fw-400" style={{width: '5%'}}>#</th>
                        <th className=" font-14px opacity-6 fw-400" style={{width: '10%'}}>Team</th>
                        <th className=" font-14px opacity-6 text-end fw-400 pe-10">Latest</th>
                        <th className=" font-14px opacity-6 fw-400" style={{width: '12%'}}>&nbsp;</th>
                        <th className=" font-14px opacity-6 fw-400" style={{width:'10%'}}>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src="https://api.sofascore.app/api/v1/team/42/image" style={{width: '32px', height: '32px'}} alt=""/>
                        </td>
                        <td className="pe-10">
                            <div className="btn-group w-100">
                                <a href="#" className="btn justify-content-center btn-success MetaLinkBold font-14px text-white p-0 lh-1 atagstyle" >W</a>
                                <a href="#" className="btn justify-content-center btn-success MetaLinkBold font-14px text-white p-0 lh-1 atagstyle" >W</a>
                                <a href="#" className="btn justify-content-center btn-danger MetaLinkBold font-14px text-white p-0 lh-1 atagstyle" >L</a>
                                <a href="#" className="btn justify-content-center btn-secondary MetaLinkBold font-14px text-white p-0 lh-1 atagstyle2 " >D</a>
                                <a href="#" className="btn justify-content-center btn-success MetaLinkBold font-14px text-white p-0 lh-1 atagstyle" >W</a>
                                <a href="#" className="btn justify-content-center btn-secondary MetaLinkBold font-14px text-white p-0 lh-1 atagstyle2" >&nbsp;</a>
                            </div>
                        </td>
                        <td className=" text-end"><span className="p-1 rounded-2 bg-success text-white font-14px">7.05</span></td>
                        <td>78</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</div>

  );
};

export default detail;




