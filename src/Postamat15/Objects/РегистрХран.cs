﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Postamat15
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Регистр хран.
    /// </summary>
    // *** Start programmer edit section *** (РегистрХран CustomAttributes)

    // *** End programmer edit section *** (РегистрХран CustomAttributes)
    [AutoAltered()]
    [Caption("Регистр хран")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РегистрХранE", new string[] {
            "Номер as \'Номер\'",
            "Хранение as \'Хранение\'",
            "Хранение.Продления as \'Продления\'"}, Hidden=new string[] {
            "Хранение.Продления"})]
    [MasterViewDefineAttribute("РегистрХранE", "Хранение", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Продления")]
    public class РегистрХран : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private IIS.Postamat15.Хранение fХранение;
        
        private IIS.Postamat15.Постамат fПостамат;
        
        // *** Start programmer edit section *** (РегистрХран CustomMembers)

        // *** End programmer edit section *** (РегистрХран CustomMembers)

        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (РегистрХран.Номер CustomAttributes)

        // *** End programmer edit section *** (РегистрХран.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (РегистрХран.Номер Get start)

                // *** End programmer edit section *** (РегистрХран.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (РегистрХран.Номер Get end)

                // *** End programmer edit section *** (РегистрХран.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрХран.Номер Set start)

                // *** End programmer edit section *** (РегистрХран.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (РегистрХран.Номер Set end)

                // *** End programmer edit section *** (РегистрХран.Номер Set end)
            }
        }
        
        /// <summary>
        /// Регистр хран.
        /// </summary>
        // *** Start programmer edit section *** (РегистрХран.Хранение CustomAttributes)

        // *** End programmer edit section *** (РегистрХран.Хранение CustomAttributes)
        [PropertyStorage(new string[] {
                "Хранение"})]
        [NotNull()]
        public virtual IIS.Postamat15.Хранение Хранение
        {
            get
            {
                // *** Start programmer edit section *** (РегистрХран.Хранение Get start)

                // *** End programmer edit section *** (РегистрХран.Хранение Get start)
                IIS.Postamat15.Хранение result = this.fХранение;
                // *** Start programmer edit section *** (РегистрХран.Хранение Get end)

                // *** End programmer edit section *** (РегистрХран.Хранение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрХран.Хранение Set start)

                // *** End programmer edit section *** (РегистрХран.Хранение Set start)
                this.fХранение = value;
                // *** Start programmer edit section *** (РегистрХран.Хранение Set end)

                // *** End programmer edit section *** (РегистрХран.Хранение Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Postamat15.Постамат.
        /// </summary>
        // *** Start programmer edit section *** (РегистрХран.Постамат CustomAttributes)

        // *** End programmer edit section *** (РегистрХран.Постамат CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Постамат"})]
        public virtual IIS.Postamat15.Постамат Постамат
        {
            get
            {
                // *** Start programmer edit section *** (РегистрХран.Постамат Get start)

                // *** End programmer edit section *** (РегистрХран.Постамат Get start)
                IIS.Postamat15.Постамат result = this.fПостамат;
                // *** Start programmer edit section *** (РегистрХран.Постамат Get end)

                // *** End programmer edit section *** (РегистрХран.Постамат Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрХран.Постамат Set start)

                // *** End programmer edit section *** (РегистрХран.Постамат Set start)
                this.fПостамат = value;
                // *** Start programmer edit section *** (РегистрХран.Постамат Set end)

                // *** End programmer edit section *** (РегистрХран.Постамат Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РегистрХранE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РегистрХранE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РегистрХранE", typeof(IIS.Postamat15.РегистрХран));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of РегистрХран.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfРегистрХран CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfРегистрХран CustomAttributes)
    public class DetailArrayOfРегистрХран : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Postamat15.DetailArrayOfРегистрХран members)

        // *** End programmer edit section *** (IIS.Postamat15.DetailArrayOfРегистрХран members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type РегистрХран by index.
        /// </summary>
        /// <summary>
        /// Adds object with type РегистрХран.
        /// </summary>
        public DetailArrayOfРегистрХран(IIS.Postamat15.Постамат fПостамат) : 
                base(typeof(РегистрХран), ((ICSSoft.STORMNET.DataObject)(fПостамат)))
        {
        }
        
        public IIS.Postamat15.РегистрХран this[int index]
        {
            get
            {
                return ((IIS.Postamat15.РегистрХран)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Postamat15.РегистрХран dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
