import * as React from "react";
import {
  styled,
  CarouselCard as VirtaCarouselCard,
  CarouselCardProps,
} from "@virtahealth/components";

interface Props {
  item: CarouselCardProps;
  index: number;
}

const CarouselCardWrapper = styled.TouchableOpacity<{ index: number }>`
  margin-left: ${({ index }) => (index > 0 ? 16 : 0)}px;
`;

export function CarouselCard({ item, index }: Props) {
  return (
    <CarouselCardWrapper key={index} index={index} onPress={item.onPress}>
      <VirtaCarouselCard item={item} />
    </CarouselCardWrapper>
  );
}
