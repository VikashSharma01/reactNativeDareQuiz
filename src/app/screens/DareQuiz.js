import React, {Component} from 'react';
import {View, Text, Container, CardItem} from 'native-base';
import {Image, StyleSheet} from 'react-native';

class DareQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizes: [
        {
          id: 1,
          qus: 'What is your favourite ?',
          ans: 1,
          options: [
            {
              Number: 1,
              option: 'Dog',
              url:
                'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_barking_other/1800x1200_dog_barking_other.jpg?resize=600px:*',
            },
            {
              Number: 2,
              option: 'Cat',
              url:
                'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg',
            },
            {
              Number: 3,
              option: 'Cat',
              url:
                'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg',
            },
            {
              Number: 4,
              option: 'Cat',
              url:
                'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg',
            },
          ],
        },
        {
          id: 1,
          qus: 'Which is your favourite Pet ?',
          ans: 2,
          options: [
            {
              Number: 1,
              option: 'Dog',
              url:
                'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_barking_other/1800x1200_dog_barking_other.jpg?resize=600px:*',
            },
            {
              Number: 2,
              option: 'Cat',
              url:
                'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg',
            },
            {
              Number: 3,
              option: 'Parrot',
              url:
                'https://cdn.cdnparenting.com/articles/2019/06/01154838/Parrot-Facts-for-Kids-1115777186.jpg',
            },
            {
              Number: 4,
              option: 'Rabbit',
              url:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rabbit-breeds-american-white-1553635287.jpg?crop=0.976xw:0.651xh;0.0242xw,0.291xh&resize=480:*',
            },
          ],
        },
      ],
      quizCount: 0,
      submitedAns: [],
    };
  }
  render() {
    const {quizes, quizCount} = this.state;
    return (
      <Container>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                'https://www.trickscity.com/wp-content/uploads/2017/05/whatsapp-dare-games-messages-questions.jpg',
            }}
            style={{height: 100, width: null, flex: 1}}
          />
        </CardItem>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

export default DareQuiz;
