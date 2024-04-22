function Story (name,gender,year,work,lang,intro) {
    this.title = name;
    this.genders = gender;
    this.years = year;
    this.works = work;
    this.langs = lang;
    this.introduce = intro;
}

let Story1 = {
    title : '아서 덴터',
    genders : '남',
    years : 15,
    works : '아키텍트',
    langs : 'C/C++, 자바, 스프링, 파이썬, 머신러닝/딥러닝',
    introduce : '실리콘 밸리에서 SNS, 핀테크, HR, 미디어 등의 다양한 프로젝트에 참여하며 경력을 쌓았습니다.\성공과 실패를 겪으며 얻게된 깨달음을 여러분과 나누고 싶습니다.'
}

let Story2 = {
    title : '김영진',
    genders : '남',
    years : 2,
    works : '개발자',
    langs : 'C#, 파이썬, 자바스크립트, 리액트, 코틀린',
    introduce : '최근에 MAUI 프레임워크로 진행한 개인 자산 관리 프로젝트에서 소프트웨어 개발에 엄청난 매력을 느꼈습니다. \나의 코드로 현실의 문제를 해결한다니! \마그라테아를 성공적으로 개발하는 것은 저의 버킷 리스트 중 하나가 되었습니다.'
}

let Story3 = {
    title : '임원철',
    genders : '남',
    years : 1,
    works : 'DBA',
    langs : '자바, PHP, Mongo DB, MS SQL, MySQL',
    introduce : '애플리케이션은 결국 데이터를 다루는 방식을 구현한 것이라고 생각합니다. \대학에서 컴퓨터 공학과의 빅데이터 과목을 수강하며 데이터 플랫폼에 관해 매력을 느꼈습니다. \이번 프로젝트의 성공 여부는 데이터에 달렸다고 생각합니다. \마그라테아에서 다룰 데이터를 생각하면 벌써 부터 흥분됩니다.'
}

let Story4 = {
    title : '유고은',
    genders : '여',
    years : 1,
    works : '클라우드',
    langs : '자바, PowerShell, Azure, AWS, GCP',
    introduce : '김영진님과 함께 프로젝트를 진행했으며 클라우드 아키텍처 구현을 담당했습니다. \학창시절 클라우드에 매력을 느껴 마이크로소프트 Azure에 빠져들었는데, 깊이 탐구하다보니 다른 퍼블릭 클라우드도 어렵지 않게 이해할 수 있었습니다. \마그라테아의 클라우드 아키텍처를 내 손으로 꼭 완성시키고 싶습니다.'
}

let Story5 = {
    title : '서혜경',
    genders : '여',
    years : 0,
    works : '개발자',
    langs : '파이썬, 스위프트, 코틀린, Node.js, 피그마, PHP, Mongo DB, MS SQL, MySQL',
    introduce : '학부과정에서 과제로 프로젝트는 많이 진행해봤지만, 기업의 사활이 걸린 실전 프로젝트는 제 인생의 첫 경험입니다. 이 프로젝트에 참여하게 되어 기대도 많이 되는 한편으로, 제가 잘할 수 있을까 염려가 되기도 합니다. 마그라테아 프로젝트에 관해 들었을 때 제 속에서 이 프로젝트는 인생을 걸고 싶다는 생각을 했습니다. \링크드인을 통해 이미 아서님의 명성을 접했던 터라, 이번 프로젝트에 함께할 수 있어서 영광입니다.'
}

//for i in 0..<5 {
//    print(i)
//}
let stories = [Story1, Story2, Story3, Story4, Story5]

for (let i = 0; i < 5; i++) {
    console.log("-------------------")
    console.log("이름 |", stories[i].title)
    console.log("경력 |", stories[i].years, "년")
    console.log(`직업 | ${stories[i].works}`) // "\(myVar)"
    // . 만나면 줄바꿈
    // abc.def.gir --> abc.\ndef.\ngir // \n
    // "." ==> ".\n"
    console.log(stories[i].introduce.split(".").join('.\n'));
}
