const openeyes1 = () =>{
    document.querySelector('header').innerHTML=`
            <nav>
                <h1>
                    my portfolio
                </h1>
                <p class="r768">
                    <a href="#introduction">Introduction</a>
                </p>
                <p class="r768">
                    <a href="#career">Career</a>
                </p>
                <p class="r768">
                    <a href="#work">Work</a>
                </p>
                <div class="u768">
                    <a id="u768_btn1" onclick="u768(1)">
                        <div class="hamberger"></div>
                        <div class="hamberger"></div>
                        <div class="hamberger"></div>
                    </a>
                </div>
            </nav>
    `;
    document.querySelector('main').innerHTML=`
            <div class="caution">
                <h2>
                    お知らせ
                </h2>
                <p>
                    7月24日よりサイトデザインを大きく一新致しました。
                </p>
            </div>
            <section id="introduction">
                <h2>
                    自己紹介
                    <span>introduction</span>
                </h2>
                <div class="u_line"></div>
                <div class="center">
                    <table class="intro">
                        <tbody>
                            <tr>
                                <th>
                                    名　前
                                </th>
                                <td>
                                    篠原 大貴<br>
                                    <span class="sub_text">(しのはら-だいき)</span>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    出　身
                                </th>
                                <td>
                                    大阪府
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    生年月日
                                </th>
                                <td>
                                    2001年12月11日
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    所有資格
                                </th>
                                <td class="table_list">
                                    <p>2021年8月｜普通自動車第一種運転免許 取得</p>
                                    <p>2022年3月｜Microsoft Office Specialist Word2019 取得</p>
                                    <p>2022年3月｜Microsoft Office Specialist Excel2019 取得</p>
                                    <p>2026年7月｜ITパスポート 取得</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    所有スキル
                                </th>
                                <td class="table_list">
                                    <p>HTML・CSS <span class="sub_text">(高校2年次に取得、基本操作可能)</span></p>
                                    <p>Javascript <span class="sub_text">(事業所で取得、基本操作可能)</span></p>
                                    <p>PHP <span class="sub_text">(事業所で取得、基本操作可能)</span></p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    備　考
                                </th>
                                <td>
                                    大学4年生の頃に自閉スペクトラム症(ASD)と診断。<br>
                                    メンタルが強くない、コミュニケーションが取れないなどの自覚症状があるが、事業所への通所を通じて改善傾向にある。
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <br>
            <section id="career">
                <h2>
                    経歴
                    <span>career</span>
                </h2>
                <div class="u_line"></div>
                <div class="center">
                    <table class="career">
                        <tbody>
                            <tr>
                                <th>
                                    2017年4月
                                </th>
                                <td>
                                    大阪府立高槻北高等学校 普通科 入学
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    2020年3月
                                </th>
                                <td>
                                    大阪府立高槻北高等学校 普通科 卒業
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    2020年4月
                                </th>
                                <td>
                                    大阪経済大学 情報社会学部 情報社会学科 入学
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    2024年3月
                                </th>
                                <td>
                                    大阪経済大学 情報社会学部 情報社会学科 卒業<br>
                                    卒業論文のテーマは「郊外化・ロードサイド化とコンパクトシティ」
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    2024年7月
                                </th>
                                <td>
                                    就労移行支援事業所 キャリスタ梅田 入所<br>
                                    現在、事業所にて自己理解やビジネスマナー、プログラミングを学習中。
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <br>
            <section id="work">
                <h2>
                    制作した作品
                    <span>work</span>
                </h2>
                <div class="u_line"></div>
                <p>
                    事業所内においてはビジネスマナーの学習や自己理解などとともにプログラミングを学習してきたが、
                    その学習や訓練の一環として、通所期間中に様々な作品を作ってきた。<br>
                    それも、高校2年生の頃から触れてきたHTMLやCSSだけに留まらず、
                    JavascriptやPHP、さらにはUnityやillustratorなどの様々な言語やツールを活用しており、
                    また作品の幅も遊び心満載の作品から実用的なものに至るまで、かなり広く制作してきている。<br>
                    今回は事業所内で制作した作品の中から4つを紹介させていただく。
                </p>
                <div class="pallet">
                    <div class="works_flex">
                        <a onclick="contents(1)"  class="works_container braker"id="works_container_1">
                            <div class="works_container_main">
                                <img src="/image/port1.png" class="works_img" id="works_img_1" alt="webゲームセンター">
                                <p class="winder">Webゲームセンター</p>
                            </div>
                        </a>
                        <a onclick="contents(2)" class="works_container braker" id="works_container_2">
                            <div class="works_container_main">
                                <img src="/image/port2.png" class="works_img" id="works_img_2" alt="きららキャラ人気投票サイト">
                                <p class="winder">きららキャラ人気投票サイト</p>
                            </div>
                        </a>
                        <a onclick="contents(3)" class="works_container trigger" id="works_container_3">
                            <div class="works_container_main">
                                <img src="/image/port3.png" class="works_img" id="works_img_3" alt="鉄道公式サイト">
                                <p class="winder">鉄道公式サイト</p>
                            </div>
                        </a>
                        <a onclick="contents(4)" class="works_container trigger" id="works_container_4">
                            <div class="works_container_main">
                                <img src="/image/port4.png" class="works_img" id="works_img_4" alt="就労移行支援事業所向けポータルサイト">
                                <p class="winder">就労移行支援事業所向けポータルサイト</p>
                            </div>
                        </a>
                    </div>
                    <div id="content">
                        <div class="works_text_top">
                            <h3>上の画像をクリックするとここに諸元が表示されます。</h3>
                            <p class="pops">
                                <a class="works_link_off">オンラインデモはこちら &gt;</a>
                            </p>
                        </div>
                        <img src="/image/port_demo.png" class="port_ul" alt="画像見本">
                        <ul>
                            <li>制作期間：3ヶ月</li>
                            <li>総制作時間：33時間</li>
                            <li>制作時期：2026年4月13日～2026年7月2日</li>
                            <li>使用言語：HTML、CSS、JavaScript、PHP、CSV、json</li>
                            <li>できること：いろいろ</li>
                        </ul>
                        <p class="port_p">
                            こちらは見本になります。<br>
                            制作物は上の4つの画像のうちのどれかをクリックし、諸元右上にある「オンラインデモはこちら」というボタンからご覧ください。
                        </p>
                        <p class="port_p">
                            <span class="works_head">1. ブラウザで確認したい方へ</span><br>
                            上記の「オンラインデモはこちら」から直接動かせます。<br>
                            ※サーバーの都合上、自動広告が挿入されます。
                        </p>
                        <p class="port_p">
                            <span class="works_head">2. 広告なしの環境・コードを確認したい方へ</span><br>
                            <a class="works_link_off margin_10">zipファイルはこちらから</a><br>
                            ※ダウンロード・解凍の上、ローカルサーバー環境（XAMPP等）で動作確認いただけます。<br>
                            ※こちらは見本です、クリックしても何も起こりません。
                        </p>
                        <p class="port_p">
                            <span class="works_head">3. コードのみを確認したい方へ</span><br>
                            <a class="works_link margin_10">コードはこちらから</a>
                        </p>
                    </div>
                </div>
            </section>
            <br>
            <section id="ques_ans">
                <div class="bl_window">
                    <div>
                        Q. 表題ページに制作時間をどれくらいかけましたか？
                    </div>
                    <div id="bl_mark_q1" class="bl_mark">
                        <a id="bl_ques1" onclick="blopen(1, 1)">
                            <div class="bl_line bl_l11"></div>
                            <div class="bl_line bl_l12"></div>
                        </a>
                    </div>
                </div>
                <div id="bl_ans1" class="bl_ans_cls">
                </div>
                <br>
                <div class="bl_window">
                    <div>
                        Q. このポータルサイトはどういった経緯で制作されたのですか？。
                    </div>
                    <div id="bl_mark_q2" class="bl_mark">
                        <a id="bl_ques2" onclick="blopen(2, 1)">
                            <div class="bl_line bl_l11"></div>
                            <div class="bl_line bl_l12"></div>
                        </a>
                    </div>
                </div>
                <div id="bl_ans2" class="bl_ans_cls">
                </div>
                <br>
                <div class="bl_window">
                    <div>
                        Q. illustratorやphotoshopは触れますか？
                    </div>
                    <div id="bl_mark_q3" class="bl_mark">
                        <a id="bl_ques3" onclick="blopen(3, 1)">
                            <div class="bl_line bl_l11"></div>
                            <div class="bl_line bl_l12"></div>
                        </a>
                    </div>
                </div>
                <div id="bl_ans3" class="bl_ans_cls">
                </div>
                <br>
                <div class="bl_window">
                    <div>
                        Q. 現場ではCSVやjsonよりもMySQLの方が採用頻度が高いですが、MySQLも扱えますか？
                    </div>
                    <div id="bl_mark_q4" class="bl_mark">
                        <a id="bl_ques4" onclick="blopen(4, 1)">
                            <div class="bl_line bl_l11"></div>
                            <div class="bl_line bl_l12"></div>
                        </a>
                    </div>
                </div>
                <div id="bl_ans4" class="bl_ans_cls">
                </div>
                <br>
                <div class="bl_window">
                    <div>
                        Q. 障がいに対して工夫しているところがあれば教えてください。
                    </div>
                    <div id="bl_mark_q5" class="bl_mark">
                        <a id="bl_ques5" onclick="blopen(5, 1)">
                            <div class="bl_line bl_l11"></div>
                            <div class="bl_line bl_l12"></div>
                        </a>
                    </div>
                </div>
                <div id="bl_ans5" class="bl_ans_cls">
                </div>
            </section>`;
    setTimeout(openeyes2, 600);
};

const openeyes2 = () =>{
    document.getElementById("opening").innerHTML=``;
};

setTimeout(openeyes1, 2000);

const contents = (link) =>{
    for(let i = 1; i < 5; i++){
        if(document.getElementById(`works_container_${i}`).classList.contains("trigger")){
            document.getElementById(`works_container_${i}`).classList.add("braker");
            document.getElementById(`works_img_${i}`).classList.add("braker_img");
            document.getElementById(`works_container_${i}`).classList.remove("trigger");
            document.getElementById(`works_img_${i}`).classList.remove("trigger_img");
        }
        
    }
    document.getElementById(`works_container_${link}`).classList.add("trigger");
    document.getElementById(`works_img_${link}`).classList.add("trigger_img");
    document.getElementById(`works_container_${link}`).classList.remove("braker");
    document.getElementById(`works_img_${link}`).classList.remove("braker_img");
    switch(link){
        case 1:
            document.getElementById("content").innerHTML=`
            <div class="works_text_top">
                <h3>1. Webゲームセンター</h3>
                <p class="pops">
                    <a class="works_link" href="http://ikiad1121.s325.xrea.com/Webゲームセンター/html/index/index.html">オンラインデモはこちら &gt;</a>
                </p>
            </div>
            <a href="http://ikiad1121.s325.xrea.com/Webゲームセンター/HTML/pages/index/index.html">
                <img src="image/port1.png" class="port_ul" alt="webゲームセンター">
            </a>
            <ul>
                <li>制作期間：3ヶ月</li>
                <li>総制作時間：50時間</li>
                <li>制作時期：2025年1月14日～4月30日</li>
                <li>使用言語：HTML、CSS、JavaScript</li>
                <li>できること：ババ抜きや宝探し、ストップウォッチなどのゲーム</li>
            </ul>
            <p class="port_p">
                事業所での在籍初期に制作し、2025年4月に事業所内で行われた作品発表会に出展した作品。
                JavaScriptやCSSアニメーションを活用し、10個のゲームを作成。
                当時はPythonやPHPといったバックエンド系の言語を習得できていなかったため、このサイトではPHP、Pythonは使用されていない。<br>
                現在の自分自身から見て完成度が高いとは言えない作品であるが、
                事業所への在籍期間内で自分がどう成長したかを表現すべく、あえてこの作品を選択させていただいた。
            </p>
            <p class="port_p">
                <span class="works_head">1. ブラウザで確認したい方へ</span><br>
                上記の「オンラインデモはこちら」から直接動かせます。<br>
                ※サーバーの都合上、自動広告が挿入されます。
            </p>
            <p class="port_p">
                <span class="works_head">2. 広告なしの環境で確認したい方へ</span><br>
                <a class="works_link margin_10" href="Webゲームセンター.zip" download>zipファイルはこちらから</a><br>
                ※ダウンロード・解凍の上、ローカルサーバー環境（XAMPP等）で動作確認いただけます。
            </p>
            <p class="port_p">
                <span class="works_head">3. コードのみを確認したい方へ</span><br>
                <a class="works_link margin_10" href="https://github.com/ikiad1121/web-game_center.git">コードはこちらから</a>
            </p>
            `;
            break;
        case 2:
            document.getElementById("content").innerHTML=`
            <div class="works_text_top">
                <h3>2. きららキャラ人気投票サイト</h3>
                <p class="pops">
                    <a class="works_link" href="http://ikiad1121.s325.xrea.com/きららキャラ人気投票サイト/index.html">オンラインデモはこちら &gt;</a>
                </p>
            </div>
            <a href="http://ikiad1121.s325.xrea.com/きららキャラ人気投票サイト/index.html">
                <img src="image/port2.png" class="port_ul" alt="きららキャラ人気投票サイト">
            </a>
            <ul>
                <li>制作期間：1ヶ月</li>
                <li>総制作時間：13時間</li>
                <li>制作時期：2025年12月2日～2026年1月13日</li>
                <li>使用言語：HTML、CSS、JavaScript、PHP、CSV、json</li>
                <li>できること：キャラクター投票</li>
            </ul>
            <p class="port_p">
                2025年4月に事業所内で行われた作品発表会の後、半年間の間でPHPやPythonといったバックエンド系の言語を習得した。
                この作品と後程紹介する「鉄道時刻表サイト」は、習得したバックエンド系の言語を応用して制作したもの。
                自分自身の趣味である「アニメ」を絡めて、アニメキャラの人気投票ができるサイトとして制作している。<br>
                日常系アニメが多いため、背景色には温かみのある桃色を採用するなど、サイトの雰囲気にも力を入れている。
            </p>
            <p class="port_p">
                <span class="works_head">1. ブラウザで確認したい方へ</span><br>
                上記の「オンラインデモはこちら」から直接動かせます。<br>
                ※サーバーの都合上、自動広告が挿入されます。
            </p>
            <p class="port_p">
                <span class="works_head">2. 広告なしの環境・コードを確認したい方へ</span><br>
                <a class="works_link margin_10" href="きららキャラ人気投票サイト.zip" download>zipファイルはこちらから</a><br>
                ※ダウンロード・解凍の上、ローカルサーバー環境（XAMPP等）で動作確認いただけます。
            </p>
            <p class="port_p">
                <span class="works_head">3. コードのみを確認したい方へ</span><br>
                <a class="works_link margin_10" href="https://github.com/ikiad1121/kirara_vote.git">コードはこちらから</a>
            </p>
            `;
            break;
        case 3:
            document.getElementById("content").innerHTML=`
            <div class="works_text_top">
                <h3>3. 鉄道公式サイト</h3>
                <p class="pops">
                    <a class="works_link" href="http://ikiad1121.s325.xrea.com/鉄道公式サイト/index.php">オンラインデモはこちら &gt;</a>
                </p>
            </div>
            <a href="http://ikiad1121.s325.xrea.com/鉄道公式サイト/index.php">
                <img src="image/port3.png" class="port_ul" alt="鉄道公式サイト">
            </a>
            <ul>
                <li>制作期間：1ヶ月</li>
                <li>総制作時間：31時間</li>
                <li>制作時期：2025年12月19日～2026年1月13日</li>
                <li>使用言語：HTML、CSS、JavaScript、PHP、CSV、json</li>
                <li>できること：駅情報の閲覧、時刻表・経路の検索</li>
            </ul>
            <p class="port_p">
                人気投票サイトを制作した実績を踏まえ、かねてから作ろうかと考えていた「鉄道のサイト」も制作することとなった。
                ただし人気投票サイトとは異なり、こちらはデザインよりも実用性を重視して制作しており、
                ページデザイン自体はシンプルに作られている。<br>
                サイト内の機能のうち、時刻表・経路検索については事業所のスタッフからの課題として制作されたもので、
                スタッフから指定された要件定義に従って制作している。
            </p>
            <p class="port_p">
                <span class="works_head">1. ブラウザで確認したい方へ</span><br>
                上記の「オンラインデモはこちら」から直接動かせます。<br>
                ※サーバーの都合上、自動広告が挿入されます。
            </p>
            <p class="port_p">
                <span class="works_head">2. 広告なしの環境で確認したい方へ</span><br>
                <a class="works_link margin_10" href="鉄道公式サイト.zip" download>zipファイルはこちらから</a><br>
                ※ダウンロード・解凍の上、ローカルサーバー環境（XAMPP等）で動作確認いただけます。
            </p>
            <p class="port_p">
                <span class="works_head">3. コードのみを確認したい方へ</span><br>
                <a class="works_link margin_10" href="https://github.com/ikiad1121/train_site.git">コードはこちらから</a>
            </p>`;
            break;
        case 4:
            document.getElementById("content").innerHTML=`
            <div class="works_text_top">
                <h3>4. ポータルサイト</h3>
                <p class="pops">
                    <a class="works_link" href="http://ikiad1121.s325.xrea.com/ポータルサイト/index.php">オンラインデモはこちら &gt;</a>
                </p>
            </div>
            <a href="http://ikiad1121.s325.xrea.com/ポータルサイト/index.php">
                <img src="image/port4.png" class="port_ul" alt="ポータルサイト">
            </a>
            <ul>
                <li>制作期間：1ヶ月</li>
                <li>総制作時間：31時間</li>
                <li>制作時期：2026年8月1日～2026年8月19日</li>
                <li>使用言語：HTML、CSS、JavaScript、PHP、json</li>
                <li>できること：ログイン・ログアウト機能、シフトの提出、応募書類の添削依頼</li>
            </ul>
            <p class="port_p">
                こちらは完全に実務を想定して制作したもので、就労移行支援事業所専用のポータルサイトという体で制作している。<br>
                利用者向けであるということも想定に入れてはいるが、利用者の中には「ログインするのが億劫に感じる人もいる」ことも考えられることから、
                就活や学習といった内容だけではなく、あえて星占いなどのエンタメコンテンツを入れるなどして、
                利用者に対して「毎日ログインをする楽しさ」も提供している。
            </p>
            <p class="port_p">
                <span class="works_head">1. ブラウザで確認したい方へ</span><br>
                上記の「オンラインデモを見る」から直接動かせます。<br>
                ※サーバーの都合上、自動広告が挿入されます。
            </p>
            <p class="port_p">
                <span class="works_head">2. 広告なしの環境で確認したい方へ</span><br>
                <a class="works_link margin_10" href="ポータルサイト.zip" download>zipファイルはこちらから</a><br>
                ※ダウンロード・解凍の上、ローカルサーバー環境（XAMPP等）で動作確認いただけます。
            </p>
            <p class="port_p">
                <span class="works_head">3. コードのみを確認したい方へ</span><br>
                <a class="works_link margin_10" href="https://github.com/ikiad1121/portal_site1.git">コードはこちらから</a>
            </p>`;
            break;
    }
    return;
};


// 768px以下のウィンドウにおけるハンバーガーメニューの開閉機構
const u768move = (t) =>{
    if(t == 0){
        document.getElementById("u768_cover").innerHTML=``;
    }else{
        document.getElementById("u768_cover").innerHTML=`
        <div id="u768_cover_head" class="u768_cover_head_off">
            <nav>
                <h1>
                    my portfolio
                </h1>
                <div class="u768">
                    <a id="u768_btn1" onclick="u768(0)">
                        <div class="x x_1"></div>
                        <div class="x x_2"></div>
                    </a>
                </div>
            </nav>
        </div>
        <div id="u768_cover_main" class="u768_cover_main_off">
            <nav>
                <p>
                    <a onclick="u768(0)" href="#introduction">Introduction</a>
                </p>
                <p>
                    <a onclick="u768(0)" href="#career">Career</a>
                </p>
                <p>
                    <a onclick="u768(0)" href="#work">Work</a>
                </p>
            </nav>
        </div>
        `;
    }
}

const u768 = (t) =>{
    if(t == 0){
        document.getElementById("u768_cover_head").classList.add("u768_cover_head_off");
        document.getElementById("u768_cover_head").classList.remove("u768_cover_head_on");
        document.getElementById("u768_cover_main").classList.add("u768_cover_main_off");
        document.getElementById("u768_cover_main").classList.remove("u768_cover_main_on");
        //document.getElementById("u768_cover").innerHTML=``;
        setTimeout(() => u768move(t), 500);
    }else{
        /*document.getElementById("u768_cover").innerHTML=`
        <div class="u768_cover_head">
            <nav>
                <h1>
                    my portfolio
                </h1>
                <div class="u768">
                    <a id="u768_btn1" onclick="u768(0)">
                        <div class="x x_1"></div>
                        <div class="x x_2"></div>
                    </a>
                </div>
            </nav>
        </div>
        <div class="u768_cover_main">
            <nav>
                <p>
                    <a onclick="u768(0)" href="#introduction">Introduction</a>
                </p>
                <p>
                    <a onclick="u768(0)" href="#career">Career</a>
                </p>
                <p>
                    <a onclick="u768(0)" href="#work">Work</a>
                </p>
            </nav>
        </div>
        `;*/
        setTimeout(u768move(t), 500);
        if(document.getElementById("u768_cover_head").classList.contains("u768_cover_head_off")){
            document.getElementById("u768_cover_head").classList.remove("u768_cover_head_off");
        }
        if(document.getElementById("u768_cover_main").classList.contains("u768_cover_main_off")){
            document.getElementById("u768_cover_main").classList.remove("u768_cover_main_off");
        }
        document.getElementById("u768_cover_head").classList.add("u768_cover_head_on");
        document.getElementById("u768_cover_main").classList.add("u768_cover_main_on");
    }
}


//ブラインドメニューの開閉機構
const blopen = (q, t) => {
    if(t == 0){
        document.getElementById(`bl_mark_q${q}`).innerHTML=`
                        <a id="bl_ques${q}, " onclick="blopen(${q}, 1)">
                            <div class="bl_line bl_l11"></div>
                            <div class="bl_line bl_l12"></div>
                        </a>
        `;
        setTimeout(textout, 500, q);
        document.getElementById(`bl_ans${q}`).classList.add(`bl_ans_cls`);
        document.getElementById(`bl_ans${q}`).classList.remove(`bl_ans_opn`);
    }else{
        document.getElementById(`bl_mark_q${q}`).innerHTML=`
                        <a id="bl_ques${q}, " onclick="blopen(${q}, 0)">
                            <div class="bl_line bl_l21"></div>
                            <div class="bl_line bl_l22"></div>
                        </a>
        `;
        switch(q){
            case 1:
                document.getElementById(`bl_ans${q}`).innerHTML=`
                    <p class="bl_ans_txt">
                        修正にかかった時間を含めると30時間程度です。
                    </p>
                `;/**/
                break;
            case 2:
                document.getElementById(`bl_ans${q}`).innerHTML=`
                    <p class="bl_ans_txt">
                        口や言葉で説明するよりも早く、私自身の持つスキル証明を行えるだろうと考え、制作しました。<br>
                        テーマカラーをスカイブルーにしたのは、私自身が好きな色だからです。
                    </p>
                `;/**/
                break;
            case 3:
                document.getElementById(`bl_ans${q}`).innerHTML=`
                    <p class="bl_ans_txt">
                        触れます。
                        実際に訓練でillustratorを使ってポスターを制作したことがあります。
                    </p>
                `;/**/
                break;
            case 4:
                document.getElementById(`bl_ans${q}`).innerHTML=`
                    <p class="bl_ans_txt">
                        今回は今回はプロトタイプとしての俊敏性を重視してCSV、jsonを採用していますが、MySQLについても学習を進めており、基礎知識はある程度持っております。
                    </p>
                `;/**/
                break;
            case 5:
                document.getElementById(`bl_ans${q}`).innerHTML=`
                    <p class="bl_ans_txt">
                        指示や説明に対してメモを取るようにしています。
                        また、分からないことが出てきたときには、確認の意味も込めて質問を行っています。
                    </p>
                `;/**/
                break;
        }
        document.getElementById(`bl_ans${q}`).classList.add(`bl_ans_opn`);
        document.getElementById(`bl_ans${q}`).classList.remove(`bl_ans_cls`);
    }
}

const textout = (q) =>{
    document.getElementById(`bl_ans${q}`).innerHTML=``;/**/
}

document.addEventListener("click", () => {
    let target = event.target;

    let aTag = target.closest('a');

    if (aTag) {
        let href = aTag.getAttribute('href');
    }
})