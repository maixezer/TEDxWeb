const faker = require('faker')

export default () => {
  return [
    {
      uid: '0665f56d-3a09-4eb7-b187-554acf92fa08',
      image: {
        url: 'static/images/desktop/home_bg.jpg',
        topic: 'Charoenkrung Road',
        desc: 'กรุงเจริญ = เจริญกรุง'
      },
      content: {
        topic: 'Charoenkrung is a Prosperous City',
        topic_extend: 'กรุงเจริญ = เจริญกรุง',
        desc: {
          one: `ถนนเจริญกรุง คือ ถนนสายแรกในกรุงเทพมหานครที่ใช้เทคนิคการสร้างแบบตะวันตก โดยทอดยาวตั้งแต่ถนนสนามไชยถึงแม่น้ำเจ้าพระยาที่ถนนตก 
          ปัจจุบันผ่านพื้นที่เขตพระนคร เขตป้อมปราบศัตรูพ่าย เขตสัมพันธวงศ์ เขตบางรัก เขตสาทรและเขตบางคอแหลม 
          ซึ่งพระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัวโปรดเกล้าฯ ให้สร้างขึ้นสำหรับขี่ม้าหรือนั่งรถม้าตากอากาศ เมื่อวันที่ 5 กุมภาพันธ์ พ.ศ. 2404 และแล้วเสร็จใน พ.ศ. 2407`,
          two: `เมื่อสร้างถนนเจริญกรุงเสร็จใหม่ๆ นั้นยังไม่ได้พระราชทานนาม จึงเรียกกันทั่วไปว่า ถนนใหม่ และชาวยุโรปเรียกว่า นิวโรด (New Road) ต่อมาพระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัวจึงโปรดเกล้าฯ พระราชทานนามถนนว่า “ถนนเจริญกรุง” ซึ่งมีความหมายว่า “ความเจริญรุ่งเรืองของบ้านเมือง”`,
          three: `TEDxCharoenkrung มุ่งมั่นที่จะเผยแพร่ไอเดียที่มีคุณค่าโดยไม่ได้เน้นเพียงแค่ไอเดียที่เกิดขึ้นในเจริญกรุงเท่านั้น แต่ยังรวมไปถึงเรื่องราวเกี่ยวกับกรุงที่เจริญ เพื่อช่วยจุดประกายพลังความคิดให้กล้าที่จะลุกขึ้นมาพัฒนา เปลี่ยนแปลง “กรุง” ของคุณ ให้ “เจริญ” ไปด้วยกัน`
        }
      },
      postedDate: new Date(2017, 8, 20).toISOString()
    },
    {
      uid: '68ffa3c1-9e2a-44ab-b545-8dbb39bf680c',
      image: {
        url: 'static/images/contents/bg_01.jpg',
        topic: 'Lalalala',
        desc: 'ลาลาลาลา'
      },
      content: {
        topic: 'Lalalala',
        topic_extend: 'ลาลาลาลา',
        desc: {
          one: faker.lorem.paragraph(),
          two: faker.lorem.paragraph(),
          three: faker.lorem.paragraph()
        }
      },
      postedDate: new Date(2017, 8, 21).toISOString()
    },
    {
      uid: '187f08ba-6c44-42a4-8dd8-b356ed3a3c33',
      image: {
        url: 'static/images/contents/bg_02.jpg',
        topic: 'Why Charoenkrung?',
        desc: 'ทำไมต้องเจริญกรุง'
      },
      content: {
        topic: 'Why Charoenkrung?',
        topic_extend: 'ทำไมต้องเจริญกรุง',
        desc: {
          one: faker.lorem.paragraph(),
          two: faker.lorem.paragraph(),
          three: faker.lorem.paragraph()
        }
      },
      postedDate: new Date(2017, 8, 22).toISOString()
    },
    {
      uid: '804b24d3-9a1a-4192-8126-bd1d45998a90',
      image: {
        url: 'static/images/contents/bg_03.jpg',
        topic: 'Everything has its first time...',
        desc: 'ครั้งแรกของ TED'
      },
      content: {
        topic: 'Everything has its first time...',
        topic_extend: 'ครั้งแรกของ TED',
        desc: {
          one: faker.lorem.paragraph(),
          two: faker.lorem.paragraph(),
          three: faker.lorem.paragraph()
        }
      },
      postedDate: new Date(2017, 8, 23).toISOString()
    }].sort((a, b) => {
      const dateA = new Date(a.postedDate),
        dateB = new Date(b.postedDate);
      // Compare the 2 dates
      return dateA > dateB;
    })
}
