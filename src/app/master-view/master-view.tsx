import { IgrAvatar, IgrCard, IgrCardContent, IgrCardHeader } from '@infragistics/igniteui-react';
import styles from './master-view.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function MasterView() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout master-view-container")}>
        <IgrCard className={classes("card")}>
          <div className={classes("group")}>
            <IgrCardHeader>
              <div slot="thumbnail">
                <IgrAvatar shape="circle">
                  <span className={classes("material-icons")}>
                    <span>person</span>
                  </span>
                </IgrAvatar>
              </div>
              <h3 slot="title">
                <span>Title goes here...</span>
              </h3>
              <h5 slot="subtitle">
                <span>Subtitle goes here...</span>
              </h5>
            </IgrCardHeader>
            <IgrCardContent className={classes("body-content")}>
              <IgrAvatar shape="circle">
                <span className={classes("material-icons")}>
                  <span>people</span>
                </span>
              </IgrAvatar>
            </IgrCardContent>
          </div>
        </IgrCard>
      </div>
    </>
  );
}
