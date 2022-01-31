// import { BigNumber } from 'ethers';
// import classes from './Auction.module.css';
import Banner from '../../components/Banner';
import Auction from '../../components/Auction';
// import Documentation from '../../components/Documentation';
// import HistoryCollection from '../../components/HistoryCollection';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setOnDisplayAuctionNounId } from '../../state/slices/onDisplayAuction';
import { push } from 'connected-react-router';
import { nounPath } from '../../utils/history';
import useOnDisplayAuction from '../../wrappers/onDisplayAuction';
import { useEffect } from 'react';
// import nounsHero from '../../assets/auction.png';
// import nounsHero from '../../assets/placeholder.png';
// import nounsHero from '../../assets/nouns.png';

interface AuctionPageProps {
  initialAuctionId?: number;
}

const AuctionPage: React.FC<AuctionPageProps> = props => {
  const { initialAuctionId } = props;
  const onDisplayAuction = useOnDisplayAuction();
  const lastAuctionNounId = useAppSelector(state => state.onDisplayAuction.lastAuctionNounId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (lastAuctionNounId === null || lastAuctionNounId === undefined) return;

    if (initialAuctionId !== undefined) {
      // handle out of bounds noun path ids
      if (initialAuctionId > lastAuctionNounId || initialAuctionId < 0) {
        dispatch(setOnDisplayAuctionNounId(lastAuctionNounId));
        dispatch(push(nounPath(lastAuctionNounId)));
      } else {
        if (onDisplayAuction === undefined) {
          // handle regular noun path ids on first load
          dispatch(setOnDisplayAuctionNounId(initialAuctionId));
        }
      }
    } else {
      // no noun path id set
      if (lastAuctionNounId >= 0) {
        dispatch(setOnDisplayAuctionNounId(lastAuctionNounId));
      }
    }
  }, [lastAuctionNounId, dispatch, initialAuctionId, onDisplayAuction]);

  return (
    <>
      <Auction auction={onDisplayAuction} />

      {/* <img className={classes.place} src={nounsHero} alt="nouns-hero-banner" /> */}

      <Banner />
      {/* {lastAuctionNounId && (
        <HistoryCollection latestNounId={BigNumber.from(lastAuctionNounId)} historyCount={10} />
      )} */}
      {/* <Documentation /> */}
    </>
  );
};
export default AuctionPage;
