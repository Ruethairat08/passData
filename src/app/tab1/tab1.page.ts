import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Level={
year:'ปีการศึกษา2562/1',
class:'อนุบาล1',
room:'ห้อง1', }

  data=[{
    image:'https://png.pngtree.com/element_origin_min_pic/16/10/04/1257f32f7db95ed.jpg',
    name:'ด.ช. เอ  เมืองใหญ่',
    id:'2578417845351'
  },
  {
    image:'http://www.khanpak.com/files/content/thumbnails/370_250/2015/content-0034463-1448510682.jpg',
    name:'ด.ช. บี  เมืองเล็ก',
    id:'2578417845987'
  },
  {
    image:'https://www.maerakluke.com/wp-content/uploads/2013/12/45688989.jpg',
    name:'ด.ญ. เบล  เมืองกลาง',
    id:'2578417845098'
  },
  {
    image:'https://www.maerakluke.com/wp-content/uploads/2014/05/35222.jpg',
    name:'ด.ญ. ส้มโอ  เมืองชัย',
    id:'2578417845231'
  },
  {
    image:'http://www.khanpak.com/files/content/thumbnails/370_250/2015/content-0033541-1444879630.jpg',
    name:'ด.ญ. ส้มแป้น  ใจดี',
    id:'2578417845752'
  },
  {
    image:'https://cache.gmo2.sistacafe.com/images/uploads/summary/image/46360/boy_cover.jpg',
    name:'ด.ช. ลพ  ดีใจ',
    id:'2578417845197'
  },
  {
    image:'https://i.pinimg.com/236x/57/7d/60/577d60709c6b008f3b4b776f6968bd23.jpg',
    name:'ด.ช. โจ้  เมืองจัน',
    id:'2578417845739'
  }
];

  
}
