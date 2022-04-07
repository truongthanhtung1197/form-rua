import * as yup from 'yup';

export const mapPropsToValues = (props: any) => {

    return {
        branding: props?.defaultData?.branding || "",
        url: props?.defaultData?.url || "",
        content: props?.defaultData?.content || "",
        logoImg: props?.defaultData?.logoImg || null,
        fileAvatar: props?.defaultData?.mediaContents[0] || null,
    };
};

export const validationSchema = yup.object().shape({
    branding: yup.string().required("Required"),
    url: yup.string().required("Required"),
    content: yup.string().required("Required"),
    logoImg: yup.mixed().required("Required"),
    fileAvatar: yup.mixed().required("Required")
});
