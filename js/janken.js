window.onload = function () {
    //手全てを取得
    let choicedHandImage = document.querySelectorAll('.choice');
    //プレイヤーに選択された要素を格納用
    let choicedElement;
    //バトル勝敗
    let battleInfo = '';
    //結果エリア取得
    const resultArea = document.getElementById('result');
    const battleInfoArea = document.getElementById('battle-info');

    function getHand(handName) {
        switch (handName) {
            case 'paper':
                return 'パー';
                break;
            case 'scissors':
                return 'チョキ';
                break;
            case 'stone':
                return 'グー';
                break;
        }
    }

    function getRandomHand() {
        const hands = ['グー', 'チョキ', 'パー'];
        const computerHand = hands[Math.floor(Math.random() * hands.length)];
        return computerHand;
    }

    function getBattleInfo(playerHand, computerHand) {
        if (playerHand === computerHand) {
            return 'あいこ'
        }

        if (playerHand === 'グー' && computerHand === 'チョキ') {
            return '勝ち';
        } else if (playerHand === 'グー' && computerHand === 'パー') {
            return '負け';
        } else if (playerHand === 'チョキ' && computerHand === 'グー') {
            return '負け';
        } else if (playerHand === 'チョキ' && computerHand === 'パー') {
            return '勝ち';
        } else if (playerHand === 'パー' && computerHand === 'グー') {
            return '勝ち';
        } else if (playerHand === 'パー' && computerHand === 'チョキ') {
            return '負け';
        }
    }
    //試合結果を計算する
    function calcResult() {
        choicedElement = this;
        //プレイヤーの手を取得
        const playerHand = getHand(choicedElement.id);
        //コンピューターの手をランダムで取得
        const computerHand = getRandomHand();
        console.log('プレイヤー: ' + playerHand + ' コンピューター:' + computerHand);
        //勝敗を計算
        battleInfo = getBattleInfo(playerHand, computerHand);
        //あいこならもう一度
        if (battleInfo === 'あいこ') {
            alert('あいこ！もう一度選ぼう！');
            return;
        }
        resultArea.textContent = 'あなたの手: ' + playerHand + ' コンピューターの手: ' + computerHand;
        battleInfoArea.textContent = ' あなたの' + battleInfo + 'です！';

    }

    for (let i = 0; i < choicedHandImage.length; i++) {
        choicedHandImage[i].onclick = calcResult;
    }
}