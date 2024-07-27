import{z} from'zod'

export const acceptMessageSchema = z.object({  //zod baata validation garda euta xa vane jastai username maatra z.min z.max jasto function direct use garne natra z.object banaara garne
    acceptMessage: z.boolean(),
})