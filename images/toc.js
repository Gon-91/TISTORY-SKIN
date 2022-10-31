//사용자 설정 필요 변수
const ArticleTagName = '#article-main-cnotainer'; //*필수 본문 영역 태그명 *
const ArticleTagLevel = ('h1,h2,h3,h4,h5'); //TOC에 표시하고싶은 태그들
const TocAreaName = '.article-toc-container';
//전역변수
//const ArticleArea = '.area_article'; //본문 영역 태그명을 입력하세요.
//const ArticleArea = Position; //본문 영역 태그명을 입력하세요.
var Count = 0;
const ArticleArea = document.querySelector(ArticleTagName);
const TocAreaParent = document.querySelector(TocAreaName);
const TocArea = CreateToc();
const Htags_Article = document.querySelector(ArticleTagName).querySelectorAll(ArticleTagLevel);
const Tags_Toc = CreateTocList();

//함수영역
//1.TOC 영역 생성
function CreateToc(){
    const NewTag = document.createElement('div');
    NewTag.id = "toc_area";
    TocAreaParent.appendChild(NewTag);

    return document.querySelector('#'+NewTag.id);
}

//2.Htags_Article ID 부여
function AddId_HtagsArticle(){
    for(let i = 0 ; i<Htags_Article.length; i++){
        if(Htags_Article[i].offsetTop>0){
            Htags_Article[i].id = 'Subject_'+i;
            Count++;
        }

  }
}
//3.TOC 영역에 Htags_Article 리스트 생성
function CreateTocList(){

    AddId_HtagsArticle();
    let wrapper = document.createElement('div');
    wrapper.id = 'toc_wrapper';
    let Name = document.createElement('h2');
    Name.innerText = "List";
    let ulTag = document.createElement('ul');

    TocArea.appendChild(wrapper);
    wrapper.appendChild(Name);
    wrapper.appendChild(ulTag);
    for(let i = 0 ; i<Count;i++){
        //a Tag
        let aTag = document.createElement('a');
        aTag.href = "#"+Htags_Article[i].id;
        aTag.innerText = Htags_Article[i].innerText;

        //a Tag level
        if(Htags_Article[i].tagName == 'H1'){aTag.className='toc_h1'};
        if(Htags_Article[i].tagName == 'H2'){aTag.className='toc_h2'};
        if(Htags_Article[i].tagName == 'H3'){aTag.className='toc_h3'};
        if(Htags_Article[i].tagName == 'H4'){aTag.className='toc_h4'};
        if(Htags_Article[i].tagName == 'H5'){aTag.className='toc_h5'};
        if(Htags_Article[i].tagName == 'H6'){aTag.className='toc_h6'};

        //liv Tag
        let liTag = document.createElement('li');
        liTag.appendChild(aTag);
        ulTag.appendChild(liTag);
    }

    return TocArea.querySelectorAll('a');
}

//4.TOC 본문 추적 구현
function StartTocChecker(){
    const BrowserSize = window.innerHeight;
    const ScrollPos = window.scrollY;
    const PageSize = ArticleArea.offsetHeight+ArticleArea.offsetTop;
    const CurrentBrowserST = ScrollPos;
    const CurrentBrowserEND = ScrollPos+BrowserSize;


    for(let i = 0 ; i < Count; i++){
        let ArticleST = Htags_Article[i].offsetTop+Htags_Article[i].offsetHeight;
        let ArticleEND = (i == Count-1)?PageSize:Htags_Article[i+1].offsetTop;
        let ArticleSize = ArticleEND-ArticleST;
        let ActiveArea = (ArticleEND - CurrentBrowserEND)>0?(ArticleSize - (ArticleEND - CurrentBrowserEND)):ArticleSize;
        let ActiveRatio = ActiveArea/ArticleSize;
        let Output = ActiveRatio*100;
        Tags_Toc[i].parentElement.style.background = `linear-gradient(90deg,#89FB89	 ${Output}%,#fff 10%)`;
    }
}

//실행영역
//AddId_HtagsArticle();
//CreateTocList();
window.onscroll = function(){
    StartTocChecker();
}