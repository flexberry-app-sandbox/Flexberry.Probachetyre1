﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probachetyre
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Карты.
    /// </summary>
    // *** Start programmer edit section *** (Карты CustomAttributes)

    // *** End programmer edit section *** (Карты CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КартыE", new string[] {
            "КодКарты as \'Код карты\'",
            "ТипКарты as \'Тип карты\'"})]
    [View("КартыL", new string[] {
            "КодКарты as \'Код карты\'",
            "ТипКарты as \'Тип карты\'"})]
    public class Карты : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодКарты = 1;
        
        private IIS.Probachetyre.ВидКарты fТипКарты;
        
        // *** Start programmer edit section *** (Карты CustomMembers)

        // *** End programmer edit section *** (Карты CustomMembers)

        
        /// <summary>
        /// КодКарты.
        /// </summary>
        // *** Start programmer edit section *** (Карты.КодКарты CustomAttributes)

        // *** End programmer edit section *** (Карты.КодКарты CustomAttributes)
        public virtual int КодКарты
        {
            get
            {
                // *** Start programmer edit section *** (Карты.КодКарты Get start)

                // *** End programmer edit section *** (Карты.КодКарты Get start)
                int result = this.fКодКарты;
                // *** Start programmer edit section *** (Карты.КодКарты Get end)

                // *** End programmer edit section *** (Карты.КодКарты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Карты.КодКарты Set start)

                // *** End programmer edit section *** (Карты.КодКарты Set start)
                this.fКодКарты = value;
                // *** Start programmer edit section *** (Карты.КодКарты Set end)

                // *** End programmer edit section *** (Карты.КодКарты Set end)
            }
        }
        
        /// <summary>
        /// ТипКарты.
        /// </summary>
        // *** Start programmer edit section *** (Карты.ТипКарты CustomAttributes)

        // *** End programmer edit section *** (Карты.ТипКарты CustomAttributes)
        public virtual IIS.Probachetyre.ВидКарты ТипКарты
        {
            get
            {
                // *** Start programmer edit section *** (Карты.ТипКарты Get start)

                // *** End programmer edit section *** (Карты.ТипКарты Get start)
                IIS.Probachetyre.ВидКарты result = this.fТипКарты;
                // *** Start programmer edit section *** (Карты.ТипКарты Get end)

                // *** End programmer edit section *** (Карты.ТипКарты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Карты.ТипКарты Set start)

                // *** End programmer edit section *** (Карты.ТипКарты Set start)
                this.fТипКарты = value;
                // *** Start programmer edit section *** (Карты.ТипКарты Set end)

                // *** End programmer edit section *** (Карты.ТипКарты Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КартыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КартыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КартыE", typeof(IIS.Probachetyre.Карты));
                }
            }
            
            /// <summary>
            /// "КартыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КартыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КартыL", typeof(IIS.Probachetyre.Карты));
                }
            }
        }
    }
}
