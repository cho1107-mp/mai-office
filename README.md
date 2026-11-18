# MAI PASSPORT 사무실 태블릿

사무실 태블릿(갤럭시 탭 A8)에서 주소창 없이 쓰는 전체 화면 껍데기 페이지.
구글 앱스 스크립트 웹앱(출고 검수, 현황판, 라벨 출력)을 아래 탭으로 오가며 띄운다.

- 탭 주소는 `index.html`의 `TABS`에서 바꾼다. `url`이 비어 있는 탭은 숨겨진다.
- 각 웹앱은 `doGet`에 `setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)`이 있어야 안에 뜬다.
- 웹앱 버튼으로 탭을 바꾸려면 `window.top.postMessage({type:'mp-tab', tab:'scan'|'dash'|'label'}, '*')`.
- 태블릿 크롬에서 이 페이지를 열고 "홈 화면에 추가" → 앱처럼 전체 화면으로 열림.
