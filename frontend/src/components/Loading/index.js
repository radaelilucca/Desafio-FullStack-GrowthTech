import React from 'react';
import Lottie from 'react-lottie';
import TextyAnim from 'rc-texty';

import * as workData from '../../assets/animations/work.json';
import * as loadingData from '../../assets/animations/loading.json';

import {
  Container,
  LoadingText,
  AnimationWork,
  AnimationLoading,
} from './styles';

export default function LoadingComponnent() {
  const animatedHeroOptions = {
    loop: true,
    autoplay: true,
    animationData: workData.default,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const animatedLoadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData.default,
  };

  return (
    <Container>
      <AnimationWork>
        <Lottie options={animatedHeroOptions} height={500} width={500} />
      </AnimationWork>
      <AnimationLoading>
        <Lottie options={animatedLoadingOptions} height={300} width={300} />
      </AnimationLoading>
      <LoadingText>
        <TextyAnim type="mask-top" className="loadingText">
          CARREGANDO
        </TextyAnim>
      </LoadingText>
    </Container>
  );
}
