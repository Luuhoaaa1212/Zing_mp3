const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

var listNode =$$('.nex-prev i')
var img=$('.img-slider img')

var prev=listNode[0]
var next=listNode[1]
var index=0;
var listImage=['./acsset/image/slider-1.jpg','./acsset/image/slider-2.jpg','./acsset/image/alider3.jpg']
function prevv(){
    prev.onclick=function(){
        var indexx=index
        if(indexx<0){
           indexx=2
        }
        img.src=listImage[indexx]
    }
}
prevv();
function nextt(){
    next.onclick=function(){
        var indexx=index+1
        if(indexx>2){
           indexx=0
        }
        img.src=listImage[indexx]
    }
}
nextt();
var slider=function (){
    img.src=listImage[index]
    index++
    if(index>2){
        index=0
    }
}
setInterval(slider,4000)

const songs=$('.songs')
const playListsongs=$('.list-songs')
const flashing=$('.flashing')
const audio=$('#audio')
const namesong=$('.medie-content h4')
const singer=$('.medie-content a')
const timerun=$('.level-audio span')
const timesong=$('.level-audio span:last-child')
const image=$('.medie-left img')
const playSongs=$('.player')
const range=$('.progress')
const newArray=[];
const buttons=$$('.actions button')


         



var displayTime=function(){
    const{duration,currentTime}=audio;
    range.max=duration;
    range.value=currentTime
    timesong.textContent=formatTime(currentTime)
    if(!duration){
        timerun.textContent='00:00'
    }else{
        timerun.textContent=this.formatTime(duration)
    }
}
var formatTime=function(number){
    const minutes=Math.floor(number/60)
    const seconds=Math.floor(number-minutes*60)
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds :seconds}`
}
displayTime()
const timer=setInterval(displayTime,1000)
//sự kiện range
range.addEventListener('change',function(){
    audio.currentTime=range.value
})
var object={
    listsong:[
        {
            name:'Ac_ma',
            singer:'AcMa',
            path:'./acsset/music/Ac_ma_den_tu_thien_duong_TVT_Remix.mp3',
            image:'./acsset/image/AcMa.jfif'
        },
        {
            name:'Cheap_Thrills_Sia',
            singer:'Cheap_Thrills_Sia',
            path:'./acsset/music/Cheap_Thrills_Sia.mp3',
            image:'./acsset/image/CheapThrill.jfif'
        },
        {
            name:'Diamond',
            singer:'AcMa',
            path:'./acsset/music/Diamond_Ver2_VQ_Remix.mp3',
            image:'./acsset/image/Devil.jpg'
        },
        {
            name:'Everytime',
            singer:'Everytime',
            path:'./acsset/music/Everytime_we_touch.mp3',
            image:'./acsset/image/diamond.jfif'
        },
        {
            name:'Sofia_Reyes',
            singer:'Sofia_Reyes',
            path:'./acsset/music/How_to_love_Cash_Cash_ft_Sofia_Reyes.mp3',
            image:'./acsset/image/Everytimewetouch.jfif'
        },
        {
            name:'Cheap_Thrills_Sia',
            singer:'Cheap_Thrills_Sia',
            path:'./acsset/music/Cheap_Thrills_Sia.mp3',
            image:'./acsset/image/CheapThrill.jfif'
        },
        {
            name:'Madilyn_Bailey',
            singer:'Madilyn_Bailey',
            path:'./acsset/music/I_need_your_love_Madilyn_Bailey.mp3',
            image:'./acsset/image/larg.jfif'
        },
        {
            name:'Kiss_Hung_Bobi',
            singer:'Kiss_Hung_Bobi',
            path:'./acsset/music/Kiss_Hung_Bobi_Remix.mp3',
            image:'./acsset/image/favicon2.png'
        },
        {
            name:'Larg_Elgit_Doda',
            singer:'Larg_Elgit_Doda',
            path:'./acsset/music/Larg_Elgit_Doda.mp3',
            image:'./acsset/image/howtolove.jfif'
        },
        {
            name:'I_need_your_love',
            singer:'I_need_your_love',
            path:'./acsset/music/I_need_your_love_Madilyn_Bailey.mp3',
            image:'./acsset/image/ineedYourLove.jfif'
        },
        {
            name:'Kiss_Hung_Bobi',
            singer:'Kiss_Hung_Bobi',
            path:'./acsset/music/Kiss_Hung_Bobi_Remix.mp3',
            image:'./acsset/image/Kiss.jfif'
        },
    
    
    ],
    curentIndex:0,
    isPlaying:false,
    israndom:false,
    isArray:false,
    isRepeat:false,
    render:function(){
        const htmts=this.listsong.map((song,index)=>{
            return `<div class="songs ${index === this.curentIndex ? 'active' :''}" data-index="${index}">
           <div class="cd-thumb ${index === this.curentIndex ? 'cc' :''}"><img src="${song.image}" alt=""></div>
           <div>
            <h3 class="name">${song.name}</h3>
            <h4 class="singer">${song.singer}</h4>
            <i class="fa-solid fa-ellipsis-vertical option"></i>
           </div>
        </div>`
        })
        playListsongs.innerHTML=htmts.join('')
    },  
    definePropertis:function(){
        //lấy ra bài hát đầu mảng
        Object.defineProperty(this,'currentSong',{
            get:function(){
                return this.listsong[this.curentIndex]
            }
        })
    },
    loadcurrentSong:function(){
        //gán
        image.src=this.currentSong.image
        namesong.innerText=this.currentSong.name
        singer.innerText=this.currentSong.singer
        audio.src=this.currentSong.path
    },
    scrollToActiveSongs:function(){
       setTimeout(()=>{
        $('.songs.active').scrollIntoView({
            behavior:'smooth',
            block:'center',
        })
    },500)
    },
    
    handleEvent:function(){
        const _this=this    
        playSongs.onclick=function(){
            //khi click thì kiểm tra vào nhánh else
            if(_this.isPlaying){
                audio.pause();
                // _this.isPlaying=false
                // playSongs.classList.remove('playing')
            }else{
                audio.play();
                // _this.isPlaying=true
                // playSongs.classList.add('playing')
            }
        }
        //khi bài hát dc play
        audio.onplay=function(){
            _this.isPlaying=true
            playSongs.classList.add('playing')
            flashing.style.display="block"
          
        }
          //khi bài hát dc pause
        audio.onpause=function(){
            _this.isPlaying=false
            playSongs.classList.remove('playing')
            flashing.style.display="none"
        }
    
        //khi hết bài
        audio.onended=function(){
            if(_this.isRepeat){
                audio.play()
            }else{
                buttons[2].click();
            }
        }
         //khi click prev
         buttons[1].onclick=function(){
            if(_this.israndom){
                //nếu bật random
                   _this.playrandomSong();
                }else{
                //nếu không bật random
                    _this.prevSong();
                }
                audio.play();
                _this.render();
                _this.scrollToActiveSongs();
       }
        //khi click next
        buttons[2].onclick=function(){
            if(_this.israndom){
            //nếu bật random
               _this.playrandomSong();
    
            }else{
            //nếu không bật random
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSongs();
            
       }
       //random songs
        buttons[0].onclick=function(){
         var iconramdom=buttons[0].querySelector('i')
            if(_this.israndom){
                //tắt random
                _this.israndom=false;
                iconramdom.style.color='#fff'
            }else{
                //bật random
               _this.israndom=true;
                iconramdom.style.color='#c273ed'
            }
        }
        //lặp lại 1 bài hát
        buttons[3].onclick=function(){
            var iconrepeat=buttons[3].querySelector('i')
            if(_this.isRepeat){
                //tắt repeat
                _this.isRepeat=false;
                iconrepeat.style.color='#fff'
            }else{
                //bật repeat
               _this.isRepeat=true;
               iconrepeat.style.color='#c273ed'
            }
        }
        //lắng nghe click vào playList
        playListsongs.onclick=function(e){
            //lấy tất cả thẻ con có clas songs trừ class.songs.active và lấy class option
            const songNode=e.target.closest('.songs:not(.active)');
            const optionNode=e.target.closest('.option');
            if( songNode || optionNode ){
                //xử lí click song 
               if(songNode){
               // songNode.dataset.index=songNode.getAttribute('data-index')
                  _this.curentIndex = Number(songNode.dataset.index)
                  _this.loadcurrentSong();
                  _this.render();
                  audio.play()
                  
                }
              
            }
        }
    
    },
    nextSong:function(){
        this.curentIndex++
        if(this.curentIndex >= this.listsong.length){
            this.curentIndex = 0;
        }
        this.loadcurrentSong()
    },
    prevSong:function(){
        this.curentIndex--
        if(this.curentIndex < 0){
            this.curentIndex = this.listsong.length-1
        }
        this.loadcurrentSong()
    },
    playrandomSong:function(){
        console.log('cũ',newArray);
        let newArrayLength = newArray.length;
        let listSongLength = this.listsong.length;
        let newIndex;
        let ii;
        if(newArrayLength>0){
                do{
                    newIndex=Math.floor(Math.random() * listSongLength)
                    for(var i=0;i<newArrayLength;i++){
                        if(newIndex === newArray[i]){
                            do{
                                ii=Math.floor(Math.random() * listSongLength)
                             }while(newIndex === ii)
                             newIndex=ii
                        }
                    }
                }while(newIndex === this.curentIndex )
            if(newArrayLength>9){
                newArray.splice(0, 10);   
            }
        }else{
            do{
                newIndex=Math.floor(Math.random() * this.listsong.length)
            }while(newIndex === this.curentIndex)
        }
        newArray.push(newIndex)
        console.log('mới',newArray);
        this.curentIndex=newIndex;
        this.loadcurrentSong()
    },
    start:function(){
        this.definePropertis();

        //render
        this.render();
        //load time
    
        //xử lí sự kiên
        this.handleEvent();

        //tải thông tin bài hát đầu tiên khi chạy ứng dụng  
        this.loadcurrentSong();
    },
}
object.start();
