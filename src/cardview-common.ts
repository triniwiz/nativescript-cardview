import { Color } from 'tns-core-modules/color';
import { ContentView, Length, Property } from 'tns-core-modules/ui/content-view';

export { backgroundColorProperty, backgroundInternalProperty } from 'tns-core-modules/ui/core/view';

/**
 * Contains the CardView class, which represents a card view component.
 */
export class CardViewCommon extends ContentView {
    /**
     * Gets the native [android widget](https://developer.android.com/reference/android/support/v7/widget/CardView.html) that represents the user interface for this component. Valid only when running on Android OS.
     */
    android: any /* android.support.v7.widget.CardView */;

    /**
     * Gets the native [ios widget](UIView) that represents the user interface for this component. Valid only when running on iOS.
     */
    ios: any /* UIView */;

    /**
     * Gets or set the radius of the card view.
     */
    radius: string | Length;

    /**
     * Gets or set the elevation of the card view.  ** Valid only when running on Android OS **
     */
    elevation: string | Length;

    /**
     * Gets or set the shadow radius of the card view.  ** Valid only when running on iOS **
     */
    shadowRadius: string | Length;

    /**
     * Set the shadow offset width of the card view. ** Valid only when running on iOS **
     */
    shadowOffsetWidth: string | Length;

    /**
     * Set the shadow offset height of the card view. ** Valid only when running on iOS **
     */
    shadowOffsetHeight: string | Length;

    /**
     * Set the shadow color of the card view. ** Valid only when running on iOS **
     */
    shadowColor: Color;

    /**
     * Set the shadow opacity of the card view. ** Valid only when running on iOS **
     */
    shadowOpacity: number;

    /**
     * Gets or set the ripple setting.
     */
    ripple: boolean;
}

export const radiusProperty = new Property<CardViewCommon, Length>({
    name: 'radius',
    valueConverter: Length.parse
});
radiusProperty.register(CardViewCommon);

export const elevationProperty = new Property<CardViewCommon, Length>({
    name: 'elevation',
    valueConverter: Length.parse
});
elevationProperty.register(CardViewCommon);

export const rippleProperty = new Property<CardViewCommon, boolean>({
    name: 'ripple',
    valueConverter: value => value === 'true'
});
rippleProperty.register(CardViewCommon);

export const shadowRadiusProperty = new Property<CardViewCommon, Length>({
    name: 'shadowRadius',
    valueConverter: Length.parse
});
shadowRadiusProperty.register(CardViewCommon);

export const shadowOffsetWidthProperty = new Property<CardViewCommon, Length>({
    name: 'shadowOffsetWidth',
    valueConverter: Length.parse
});
shadowOffsetWidthProperty.register(CardViewCommon);

export const shadowOffsetHeightProperty = new Property<CardViewCommon, Length>({
    name: 'shadowOffsetHeight',
    valueConverter: Length.parse
});
shadowOffsetHeightProperty.register(CardViewCommon);

export const shadowColorProperty = new Property<CardViewCommon, Color>({
    name: 'shadowColor',
    valueConverter: value => new Color(value)
});
shadowColorProperty.register(CardViewCommon);

export const shadowOpacityProperty = new Property<CardViewCommon, number>({
    name: 'shadowOpacity',
    valueConverter: value => +value
});
shadowOpacityProperty.register(CardViewCommon);
