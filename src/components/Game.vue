<template>
    <div class="Game container">
        <h2 class="center brown-text" style="font-size: 75px">{{this.name}}</h2>
          

             <div class="card">
            <div class="card-content">
                <h5 class="center brown-text">Roll D20</h5>
        <input type="number" v-model="numDiceTwenty" style="width: 95px; float:right" placeholder="# of dice">
        <button type="submit" @click="rollTwenty" class="dice_20 btn"></button>
        <div v-for="(result,index) in resultsTwenty" :key="index" style="font-size: 25px">{{result}}</div>
         <span v-if="rollCheckTwenty && resultsTwenty != 0" class="brown-text" style="font-size: 40px"><b>{{this.name}}'s total roll is: {{this.resultTotalTwenty}}</b></span>
            </div>
            <button class="brown btn" v-if="rollCheckTwenty" @click="clearTwenty">clear</button>
            </div>




             <div class="card">
            <div class="card-content">
                <h5 class="center brown-text">Roll D4</h5>
        <input type="number" v-model="numDiceFour" style="width: 95px; float:right" placeholder="# of dice">
        <button type="submit" @click="rollFour" class="dice_4 btn"></button>
        <div v-for="(result,index) in resultsFour" :key="index" style="font-size: 25px">{{result}}</div>
         <span v-if="rollCheckFour && resultsFour !=0" class="brown-text" style="font-size: 40px"><b>{{this.name}}'s total roll is: {{this.resultTotalFour}}</b></span>
            </div>
            <button class="brown btn" v-if="rollCheckFour" @click="clearFour">clear</button>
            </div>



        <div class="card">
            <div class="card-content">
                <h5 class="center brown-text">Roll D6</h5>
        <input type="number" v-model="numDice" style="width: 95px; float:right" placeholder="# of dice">
        <button type="submit" @click="rollSix" class="dice_6 btn"></button>
        <div v-for="(result,index) in results" :key="index" style="font-size: 25px">{{result}}</div>
         <span v-if="rollCheckSix && results !=0" class="brown-text" style="font-size: 40px"><b>{{this.name}}'s total roll is: {{this.resultTotal}}</b></span>
            </div>
            <button class="brown btn" v-if="rollCheckSix" @click="clearSix">clear</button>
            </div>


            <div class="card">
            <div class="card-content">
                <h5 class="center brown-text">Roll D8</h5>
        <input type="number" v-model="numDiceEight" style="width: 95px; float:right" placeholder="# of dice">
        <button type="submit" @click="rollEight" class="dice_8 btn"></button>
        <div v-for="(result,index) in resultsEight" :key="index" style="font-size: 25px">{{result}}</div>
         <span v-if="rollCheckEight && resultsEight != 0" class="brown-text" style="font-size: 40px"><b>{{this.name}}'s total roll is: {{this.resultTotalEight}}</b></span>
            </div>
            <button class="brown btn" v-if="rollCheckEight" @click="clearEight">clear</button>
            </div>


              <div class="card">
            <div class="card-content">
                <h5 class="center brown-text">Roll D10</h5>
        <input type="number" v-model="numDiceTen" style="width: 95px; float:right" placeholder="# of dice">
        <button type="submit" @click="rollTen" class="dice_10 btn"></button>
        <div v-for="(result,index) in resultsTen" :key="index" style="font-size: 25px">{{result}}</div>
         <span v-if="rollCheckTen && resultsTen != 0" class="brown-text" style="font-size: 40px"><b>{{this.name}}'s total roll is: {{this.resultTotalTen}}</b></span>
            </div>
            <button class="brown btn" v-if="rollCheckTen" @click="clearTen">clear</button>
            </div>


            <div class="card">
            <div class="card-content">
                <h5 class="center brown-text">Roll D12</h5>
        <input type="number" v-model="numDiceTwelve" style="width: 95px; float:right" placeholder="# of dice">
        <button type="submit" @click="rollTwelve" class="dice_12 btn"></button>
        <div v-for="(result,index) in resultsTwelve" :key="index" style="font-size: 25px">{{result}}</div>
         <span v-if="rollCheckTwelve && resultsTwelve != 0" class="brown-text" style="font-size: 40px"><b>{{this.name}}'s total roll is: {{this.resultTotalTwelve}}</b></span>
            </div>
            <button class="brown btn" v-if="rollCheckTwelve" @click="clearTwelve">clear</button>
            </div>



       <div class="card">
            <div class="card-content">
                <h5 class="center brown-text">Roll D16</h5>
        <input type="number" v-model="numDiceSixteen" style="width: 95px; float:right" placeholder="# of dice">
        <button type="submit" @click="rollSixteen" class="dice_16 btn"></button>
        <div v-for="(result,index) in resultsSixteen" :key="index" style="font-size: 25px">{{result}}</div>
         <span v-if="rollCheckSixteen && resultsSixteen !=0" class="brown-text" style="font-size: 40px"><b>{{this.name}}'s total roll is: {{this.resultTotalSixteen}}</b></span>
            </div>
            <button class="brown btn" v-if="rollCheckSixteen" @click="clearSixteen">clear</button>
            </div>


             <div class="card">
            <div class="card-content">
                <h5 class="center brown-text">Roll Percentage</h5>
        <input type="number" v-model="numDicePer" style="width: 95px; float:right" placeholder="# of dice">
        <button type="submit" @click="rollPer" class="dice_per btn"></button>
        <div v-for="(result,index) in resultsPer" :key="index" style="font-size: 25px">{{result}}%</div>
         <span v-if="rollCheckPer && resultsPer !=0" class="brown-text" style="font-size: 40px"><b>{{this.name}}'s roll is: {{this.resultTotalPer}}%</b></span>
            </div>
            <button class="brown btn" v-if="rollCheckPer" @click="clearPer">clear</button>
            </div>

            


         
        
       
       
    </div>
</template>

<script>
export default {
    name: 'Game',
    props:['name'],
    data(){
        return {
            sixDie: null,
            twentyDie: null,
            fourDie: null,
            eightDie:null,
            twelveDie: null,
            sixteenDie: null,
            tenDie: null,
            perDie: null,

            sixStyle: 'dice_6',

            rollCheckSix: false,
            rollCheckTwenty: false,
            rollCheckFour: false,
            rollCheckEight: false,
            rollCheckTwelve: false,
            rollCheckSixteen: false,
            rollCheckTen: false,
            rollCheckPer: false,

            numDice: 1,
            numDiceTwenty: 1,
            numDiceFour: 1,
            numDiceEight: 1,
            numDiceTwelve: 1,
            numDiceSixteen: 1,
            numDiceTen: 1,
            numDicePer: 1,

           
            results: [],
            resultsTwenty: [],
            resultsFour: [],
            resultsEight:[],
            resultsTwelve: [],
            resultsSixteen: [],
            resultsTen: [],
            resultsPer: [],

            resultTotal: 0,
            resultTotalTwenty: 0,
            resultTotalFour: 0,
            resultTotalEight:0,
            resultTotalTwelve: 0,
            resultTotalSixteen: 0,
            resultTotalTen: 0,
            resultsTotalPer: 0,
        }
    },
    methods: {

        rollSix(){
            this.rollCheckSix = true
            this.results = []
        

            for(let j = 0; j<this.numDice; j++){
            this.sixDie = (Math.floor(Math.random() * 6) +1)
            
            if(this.sixDie === 1){
                this.sixStyle = 'dice_1'
            } else if(this.sixDie === 2){
                this.sixStyle = 'dice_2'
            } else if(this.sixDie === 3) {
                this.sixStyle = 'dice_3'
            } else if (this.sixDie === 4){
                this.sixStyle = 'dice_4'
            } else if(this.sixDie === 5){
                this.sixStyle = 'dice_5'
            } else if(this.sixDie === 6){
                this.sixStyle = 'dice_6'
            }
            
            this.results.push(this.sixDie)
          
            
            }
            this.resultTotal = this.results.reduce((a,b) => {
              return  a + b
            })
            // console.log('result total is ' + this.resultTotal)
        },

        rollTwenty(){
            this.rollCheckTwenty = true
            this.resultsTwenty = []

            for(let j = 0; j<this.numDiceTwenty; j++){
            this.twentyDie = (Math.floor(Math.random() * 20) +1)
            
            this.resultsTwenty.push(this.twentyDie)
           

            }
                this.resultTotalTwenty = this.resultsTwenty.reduce((a,b) => {
              return  a + b
            })
        },

          rollFour(){
            this.rollCheckFour = true
            this.resultsFour = []

            for(let j = 0; j<this.numDiceFour; j++){
            this.fourDie = (Math.floor(Math.random() * 4) +1)
            
            this.resultsFour.push(this.fourDie)
           

            }
                this.resultTotalFour = this.resultsFour.reduce((a,b) => {
              return  a + b
            })
        },

             rollEight(){
            this.rollCheckEight = true
            this.resultsEight = []

            for(let j = 0; j<this.numDiceEight; j++){
            this.eightDie = (Math.floor(Math.random() * 8) +1)
            this.resultsEight.push(this.eightDie)
            }
                this.resultTotalEight = this.resultsEight.reduce((a,b) => {
              return  a + b
            })
        },
              rollTwelve(){
            this.rollCheckTwelve = true
            this.resultsTwelve = []

            for(let j = 0; j<this.numDiceTwelve; j++){
            this.twelveDie = (Math.floor(Math.random() * 12) +1)
            this.resultsTwelve.push(this.twelveDie)
            }
                this.resultTotalTwelve = this.resultsTwelve.reduce((a,b) => {
              return  a + b
            })
        },
              rollSixteen(){
            this.rollCheckSixteen = true
            this.resultsSixteen = []

            for(let j = 0; j<this.numDiceSixteen; j++){
            this.sixteenDie = (Math.floor(Math.random() * 16) +1)
            this.resultsSixteen.push(this.sixteenDie)
            }
                this.resultTotalSixteen = this.resultsSixteen.reduce((a,b) => {
              return  a + b
            })
        },
              rollTen(){
            this.rollCheckTen = true
            this.resultsTen = []

            for(let j = 0; j<this.numDiceTen; j++){
            this.tenDie = (Math.floor(Math.random() * 10) +1)
            this.resultsTen.push(this.tenDie)
            }
                this.resultTotalTen = this.resultsTen.reduce((a,b) => {
              return  a + b
            })
        },
                rollPer(){
            this.rollCheckPer = true
            this.resultsPer = []

            for(let j = 0; j<this.numDicePer; j++){
            this.perDie = (Math.floor(Math.random() * 100) +1)
            this.resultsPer.push(this.perDie)
            }
                this.resultTotalPer = this.resultsPer.reduce((a,b) => {
              return  a + b
            })
        },
        clearTwenty(){
          this.rollCheckTwenty = false
          this.resultsTwenty = []
        },
          clearFour(){
          this.rollCheckFour = false
          this.resultsFour = []
        },
           clearSix(){
          this.rollCheckSix = false
          this.results = []
        },
           clearEight(){
          this.rollCheckEight = false
          this.resultsEight = []
        },
            clearTen(){
          this.rollCheckTen = false
          this.resultsTen = []
        },
            clearTwelve(){
          this.rollCheckTwelve = false
          this.resultsTwelve = []
        },
            clearSixteen(){
          this.rollCheckSixteen = false
          this.resultsSixteen = []
        },
            clearPer(){
          this.rollCheckPer = false
          this.resultsPer = []
        },

        
    },
    computed: {

    }
    
}
</script>

<style scoped>

.card{
    
    background-color: beige;
    background-size: contain;
    
    
}

.dice_4 {
  width: 68px;
  height:68px;
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtRExxYfgDOK52GUAxAIESZ61Vdn_BP00KWQ&usqp=CAU') no-repeat;
  background-size:  contain;
  
}

.dice_6 {
  width: 68px;
  height:68px;
  background: url('https://2.bp.blogspot.com/-kpuHsSmGyP8/W8mCAFvkKkI/AAAAAAAAIBc/XfbSVB9CbWgauNdVyiRCno_QuMvUnFGMQCLcBGAs/s1600/spr_dice_6.png') no-repeat;
  /* background: url('https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/e58a9f2fcd0fc0be17e5f0773beef503/card.jpg') no-repeat; */
  background-size:  contain;

}

.dice_8{
  width: 68px;
  height:68px;
  background: url('https://cdn11.bigcommerce.com/s-70184/images/stencil/350x350/products/535/7430/d8-dice-red__54892.1530283709.jpg?c=2') no-repeat;
  background-size:  contain;

}
.dice_10{
    width: 68px;
  height:68px;
  background: url('https://cdn11.bigcommerce.com/s-70184/images/stencil/1280x1280/products/543/7142/d10-red-opaque__26369.1522248361.jpg?c=2') no-repeat;
  background-size:  contain;
}
.dice_12{
    width: 68px;
  height:68px;
  background: url('https://cdn11.bigcommerce.com/s-70184/images/stencil/1280x1280/products/575/7526/d12-red-dice__12834.1531856195.jpg?c=2') no-repeat;
  background-size:  contain;
}
.dice_16{
    width: 68px;
  height:68px;
  background: url('https://img.joomcdn.net/d9bc9d8fafeb94e326ae728f4f43cea97f2eaee1_original.jpeg') no-repeat;
  background-size:  contain;
}
.dice_20 {
    width: 68px;
  height:68px;
  background: url('https://images-na.ssl-images-amazon.com/images/I/61jjNdNQ-DL._AC_SX522_.jpg') no-repeat;
  background-size:  contain;
}
.dice_per {
    width: 68px;
  height:68px;
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR391thlqIFUMfcAfVeZs0Qd8tbRe-WZ9PtbQ&usqp=CAU') no-repeat;
  background-size:  contain;
}

.Game{
    max-width: 700px;
}
label {
  margin-left: 300px;
  font-size: 20px;
}
</style>