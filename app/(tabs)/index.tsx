import ChevronIcon from '@/assets/svg/CommonIcons/ChevronIcon';
import CrossIcon from '@/assets/svg/CommonIcons/CrossIcon';
import AvatarIcon from '@/assets/svg/TopIcons/AvatarIcon';
import QrIcon from '@/assets/svg/TopIcons/QrIcon';
import CardDetailsList from '@/components/HomeScreen/CardsDetaisList';
import ServicesNavMenu from '@/components/HomeScreen/ServicesNavMenu';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const WeekExpencesBar = (expences: Array<number>) => {
  return (
    <>
      <View style={styles.heddingLineBox}>
        <View></View>
      </View>
    </>
  );
};

export default function HomeScreen() {
  return (
    <ThemedView style={styles.contentContainer}>
      <ThemedView style={styles.topBox}>
        <ThemedView style={styles.topBoxLeft}>
          <ThemedView style={styles.boxLeftAvatar}>
            <AvatarIcon />
          </ThemedView>

          <ThemedView style={styles.boxLeftTitle}>
            <ThemedText type="default">'Name User'</ThemedText>
          </ThemedView>

          <ThemedView style={styles.boxLeftChevron}>
            <ChevronIcon />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.topBoxRight}>
          <QrIcon />
        </ThemedView>
      </ThemedView>

      <ServicesNavMenu />

      <ThemedView style={styles.details}>
        <ThemedView style={styles.detailsCardsContainer}>
          <CardDetailsList />
        </ThemedView>

        <TouchableOpacity
          onPress={() => {}}
          style={styles.detailsButtonContainer}
        >
          <CrossIcon />
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.expencesBox}>
        <ThemedView style={styles.expencesBoxHeadding}>
          <ThemedView style={styles.headdingTitleContainer}>
            <ThemedText style={styles.titleContainerLeft}></ThemedText>
            <ThemedText style={styles.titleContainerRight}></ThemedText>
          </ThemedView>
          {/* <View style={styles.heddingLineBox}>
            <View></View>
          </View> */}
        </ThemedView>

        <ThemedView style={styles.expencesBoxSections}>
          <ThemedView style={styles.boxSectionsToday}></ThemedView>
          <ThemedView style={styles.boxSectionsYesterday}></ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
  },
  topBox: {
    width: 375,
    height: 40,
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
  },
  topBoxLeft: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  boxLeftAvatar: {
    width: 36,
    height: 36,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    backgroundColor: '#0F0F0F',
  },
  boxLeftTitle: {
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  boxLeftTitleText: {
    textAlign: 'center',
    width: '100%',
  },
  boxLeftChevron: {
    width: 6,
    height: 10,
  },

  topBoxRight: {
    flexDirection: 'row',

    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',
    width: 40,
    height: 40,
  },

  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 98,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 10,
  },
  detailsCardsContainer: {
    height: '100%',
    width: '85%',
  },

  detailsButtonContainer: {
    backgroundColor: '#0F0F0F',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '12%',
    borderRadius: 16,
    padding: 12,
  },

  expencesBox: {
    width: 375,
    height: 377,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 32,
    opacity: 1,
  },
  expencesBoxHeadding: {},
  heddingLineBox: {},
  expencesBoxSections: {},
  boxSectionsToday: {},
  boxSectionsYesterday: {},
});
