<script setup></script>

<template>
  <div class="container">
    <div>
      <div class="content">
        <h2>Peter Griffin</h2>
        <p>
          Hatte 'ne Lektion bei De Long und boah, war das klasse! Er hatte nicht mal ein Problem mit meiner kugelrunden
          Bauchform. Fühlte mich fast wie ein Delfin... ein sehr schwerer Delfin. Zwei Daumen hoch! Hehehehe.
        </p>
      </div>
    </div>
    <div>
      <div class="content">
        <h2>Glenn Quagmire</h2>
        <p>
          Nahm eine Surf-Stunde und, naja, der Anzug sah bei mir verdammt gut aus! Aber zurück zu De Long, er war
          erstklassig. Würde es auf jeden Fall wieder tun... und ich rede immer noch vom Surfen. Alright
        </p>
      </div>
    </div>
    <div>
      <div class="content">
        <h2>Joe Swanson</h2>
        <p>
          Trotz meines Rollstuhls hat De Long einen Weg gefunden, mich auf die Welle zu bringen! Es war unglaublich und
          ich habe mich noch nie so frei gefühlt. Diese Erfahrung war beeindruckend. Er bekommt von mir volle Punktzahl!
          Roll on!
        </p>
      </div>
    </div>
    <div>
      <div class="content">
        <h2>Cleveland Brown</h2>
        <p>
          War das ein Ritt! Ich dachte, ich würde fallen und meinen eigenen 'Cleveland Show' Absturz machen, aber De
          Long hielt mich stabil und auf der Welle. Einfach fantastisch! No, no, no, no... ich würde es definitiv wieder
          tun
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  /* padding: 0; */
  box-sizing: border-box;
}

.container {
  height: 55vh; /* Overwrite from general style specifically for the recommendations */

  > div {
    flex: 0 0 15vw;
    border-radius: 0.5rem;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    box-shadow: 1px 5px 15px #1e0e3e;
    position: relative;
    overflow: hidden;

    &:nth-of-type(1) {
      background: url('https://static.wikia.nocookie.net/familyguy/images/a/aa/FamilyGuy_Single_PeterDrink_R7.jpg')
        no-repeat 50% / cover;
    }

    &:nth-of-type(2) {
      background: url('https://upload.wikimedia.org/wikipedia/en/f/fe/Glenn_Quagmire.png') no-repeat 50% / cover;
    }

    &:nth-of-type(3) {
      background: url('https://static.wikia.nocookie.net/familyguy/images/9/9c/190px-Joe_Swanson.png') no-repeat 50% /
        cover;
    }

    &:nth-of-type(4) {
      background: url('https://static.wikia.nocookie.net/familyguy/images/1/1f/Cleveland.png') no-repeat 50% / cover;
    }

    .content {
      font-size: 1.5rem;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 15px;
      opacity: 0;
      flex-direction: column;
      height: 100%;
      justify-content: flex-end;
      background: rgb(2, 2, 46, 0.5);

      transform: translatey(100%);
      transition: opacity 0.5s ease-in-out, transform 0.5s 0.2s;
      visibility: hidden;

      p {
        display: block;
        margin-top: 5px;
        font-size: 1.2rem;
      }
    }

    &:hover {
      flex: 0 0 250px;
      box-shadow: 1px 3px 15px #000000;
    }

    &:hover .content {
      opacity: 1;
      transform: translatey(0%);
      visibility: visible;
    }
  }
}
</style>
