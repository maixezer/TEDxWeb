import uuidv4 from 'uuid/v4'

export default (path) => {
  return [
    {
      uid: uuidv4(),
      imageUrl: `static/images/${path}/home_bg.jpg`,
      topic: 'Charoenkrung Road',
      desc: 'กรุงเจริญ = เจริญกรุง',
      posted_date: new Date(2017, 8, 20).toISOString()
    },
    {
      uid: uuidv4(),
      imageUrl: 'static/images/contents/bg_01.jpg',
      topic: 'Lalalala',
      desc: 'ลาลาลาลา',
      posted_date: new Date(2017, 8, 21).toISOString()
    },
    {
      uid: uuidv4(),
      imageUrl: 'static/images/contents/bg_02.jpg',
      topic: 'Why Charoenkrung?',
      desc: 'ทำไมต้องเจริญกรุง',
      posted_date: new Date(2017, 8, 22).toISOString()
    },
    {
      uid: uuidv4(),
      imageUrl: 'static/images/contents/bg_03.jpg',
      topic: 'Everything has its first time...',
      desc: 'ครั้งแรกของ TED',
      posted_date: new Date(2017, 8, 23).toISOString()
    }].sort((a, b) => {
      const dateA = new Date(a.posted_date),
        dateB = new Date(b.posted_date);
      // Compare the 2 dates
      return ((dateA < dateB) ? -1 : ((dateA > dateB) ? 1 : 0));
    })
}
