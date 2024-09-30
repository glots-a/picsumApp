import {useWindowDimensions, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {useGetPicsumImagesQuery} from '../redux/api/userApi';
import {RefreshControl} from 'react-native-gesture-handler';
import {Container, DotLoader, ImageComponent} from '../components';

type ImageType = {
  id: string;
  author: string;
  width: string;
  height: string;
  url: string;
  download_url: string;
};

export const HomeScreen = () => {
  const [page, setPage] = useState(1);
  const {width: WIDTH} = useWindowDimensions();

  const {
    data: imageData,
    isLoading,
    isFetching,
    refetch,
  } = useGetPicsumImagesQuery({
    page: page,
    limit: 10,
  });

  const onRefresh = () => {
    if (page === 1) {
      refetch();
    } else {
      setPage(1);
    }
  };

  const fetchNextPage = () => {
    if (!isLoading && !isFetching) {
      setPage(current => current + 1);
    }
  };

  const renderItem = useCallback(({item}: {item: ImageType}) => {
    return <ImageComponent path={item.download_url} author={item.author} />;
  }, []);

  const key = useCallback((item: ImageType) => item?.id, []);

  const footerComponent = useCallback(() => {
    return isFetching ? <ActivityIndicator size={50} color={'blue'} /> : null;
  }, [isFetching]);

  return (
    <Container>
      {!isLoading ? (
        <FlashList
          data={imageData}
          scrollEnabled
          estimatedItemSize={WIDTH + 8}
          contentContainerStyle={S.FLASHLIST}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={1}
          onEndReached={fetchNextPage}
          keyExtractor={key}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
          }
          ListFooterComponent={footerComponent}
        />
      ) : (
        <DotLoader />
      )}
    </Container>
  );
};

const S = StyleSheet.create({
  FLASHLIST: {paddingTop: 4},
});
