import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Content from './content';
import './styles.css';

/**
 * Buttons are clickable items used to perform an action.
 */
export default class Button extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
    }

    getVariantClassNames() {
        const { variant } = this.props;
        if (variant === 'base') {
            return null;
        }
        return `rainbow-button--${variant}`;
    }

    getClassNames() {
        const { className, shaded, variant, isLoading } = this.props;
        const isShaded =
            shaded &&
            (variant === 'neutral' ||
                variant === 'brand' ||
                variant === 'destructive' ||
                variant === 'success');

        return classnames(
            'rainbow-button',
            this.getVariantClassNames(),
            {
                'rainbow-button--shaded': isShaded,
                'rainbow-button--loading': isLoading && variant !== 'base',
            },
            className,
        );
    }

    isDisabled() {
        const { disabled, isLoading } = this.props;
        return disabled || isLoading;
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.buttonRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.buttonRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.buttonRef.current.blur();
    }

    render() {
        const {
            style,
            label,
            children,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            title,
            type,
            ariaHaspopup,
            id,
            isLoading,
            variant,
            ariaPressed,
            ariaControls,
            ariaExpanded,
            onKeyDown,
            form,
        } = this.props;

        return (
            <button
                data-id="button-element"
                id={id}
                className={this.getClassNames()}
                style={style}
                disabled={this.isDisabled()}
                tabIndex={tabIndex}
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={onClick}
                title={title}
                type={type}
                aria-haspopup={ariaHaspopup}
                aria-controls={ariaControls}
                aria-expanded={ariaExpanded}
                aria-pressed={ariaPressed}
                onKeyDown={onKeyDown}
                form={form}
                ref={this.buttonRef}
            >
                <Content variant={variant} label={label} isLoading={isLoading}>
                    {children}
                </Content>
            </button>
        );
    }
}

Button.propTypes = {
    /** The text to be displayed inside the button. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The content of the button, used to render icon or text elements inside the button.
     * Children take precedence over label. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** The variant changes the appearance of the button.
     * Accepted variants include base, neutral, brand, outline-brand, destructive,
     * success, inverse and border-inverse. */
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'inverse',
        'border-inverse',
    ]),
    /** Specifies true when the button has a shadow around it.
     * Only neutral, brand, destructive and success variant can be shaded. */
    shaded: PropTypes.bool,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** Specifies the type of button. Valid values are button, reset, and submit. */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /** Specifies whether this button should be displayed in a disabled state.
     * Disabled buttons can't be clicked. */
    disabled: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when a keyboard key is pressed. */
    onKeyDown: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** Indicates that the element has a popup context menu or sub-level menu. */
    ariaHaspopup: PropTypes.bool,
    /** A space-separated list of element IDs that
     * this button controls the contents or presence of. */
    ariaControls: PropTypes.string,
    /** Indicates whether an element the button controls is expanded or collapsed.
     * Valid values are 'true' or 'false'. */
    ariaExpanded: PropTypes.bool,
    /** Indicates that the element has been pressed. */
    ariaPressed: PropTypes.bool,
    /** It must be the id attribute of a form element that the button is associated with. */
    form: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** If it is set to true, then a loading symbol is displayed. */
    isLoading: PropTypes.bool,
};

Button.defaultProps = {
    label: undefined,
    children: null,
    variant: 'neutral',
    shaded: false,
    title: undefined,
    type: 'button',
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onKeyDown: () => {},
    onFocus: () => {},
    onBlur: () => {},
    ariaHaspopup: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    isLoading: false,
    ariaPressed: undefined,
    ariaControls: undefined,
    ariaExpanded: undefined,
    form: undefined,
};
